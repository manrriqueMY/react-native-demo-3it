import {
  StyleSheet,
  Text,
  View,
  Picker,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { GENEROS } from "../../static";
import SizeBox from "../custom/components/SizeBox";
import ErrorLabel from "../custom/components/ErrorLabel";
import useStateCallback from "../custom/hooks/UseStateCallback";
import Failed from "../custom/components/Failed";
import Success from "../custom/components/Success";
import { save } from "../services/wsencuesta";

const Encuesta = ({ navigation }) => {
  const [music, setmusic] = useState("Rock");
  const [email, setemail] = useState("");

  const [errors, seterrors] = useStateCallback(false);
  const [loading, setloading] = useState(false);

  const [result, setresult] = useState({
    message: "",
    status: true,
    show: false,
  });

  const senddata = async () => {
    setresult({ ...result, show: false });
    if (email == "") return false;
    setloading(true);
    const res = await save({ email, music });
    setloading(false);
    setresult({
      ...result,
      show: true,
      message: res.message,
      status: res.status,
    });
  };

  const onSubmit = () => (!errors ? seterrors(true, senddata) : senddata());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Encuesta 3it</Text>
      <SizeBox />
      <Text>Estilo Musical</Text>
      <Picker
        selectedValue={music}
        style={styles.picker}
        onValueChange={(value, itemIndex) => setmusic(value)}
      >
        {GENEROS.map((item, idx) => (
          <Picker.Item key={idx} label={item} value={item} />
        ))}
      </Picker>
      <SizeBox />
      <Text>Correo Electrónico</Text>
      <TextInput style={styles.picker} onChangeText={setemail} value={email} />
      {errors && email == "" && <ErrorLabel />}
      <SizeBox />
      <Button
        onPress={() => onSubmit()}
        disabled={loading}
        style={styles.picker}
        title={loading ? "..." : "ENVIAR"}
      />
      <SizeBox />
      {result.show && (result.status ? <Success /> : <Failed />)}
      <SizeBox />
      {result.show && result.status && (
        <Button
          onPress={() => navigation.navigate("RESULTADOS")}
          title="Ir a los resultados"
          style={styles.picker}
        />
      )}
    </View>
  );
};

export default Encuesta;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 70px)",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem",
  },
  picker: {
    height: 50,
    width: "80%",
    borderWidth: 1,
    padding: 10,
    borderColor: "#cfcfcf",
  },
});
