import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SizeBox from "../custom/components/SizeBox";

const Acerca = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}> ├───custom </Text>
      <Text style={styles.text}> │ ├───components </Text>
      <Text style={styles.text}> │ │ ├───ErrorLabel.js </Text>
      <Text style={styles.text}> │ │ ├───Failed.js </Text>
      <Text style={styles.text}> │ │ ├───SizeBox.js </Text>
      <Text style={styles.text}> │ │ └───Success.js </Text>
      <Text style={styles.text}> │ │ </Text>
      <Text style={styles.text}> │ └───hooks </Text>
      <Text style={styles.text}> │ . └───useStateCallback.js </Text>
      <Text style={styles.text}> │ </Text>
      <Text style={styles.text}> ├───screens </Text>
      <Text style={styles.text}> │ ├───Acerca.js </Text>
      <Text style={styles.text}> │ ├───Encuesta.js </Text>
      <Text style={styles.text}> │ └───Resultados.js </Text>
      <Text style={styles.text}> │ </Text>
      <Text style={styles.text}> └───services </Text>
      <Text style={styles.text}> . ├───api.js </Text>
      <Text style={styles.text}> . └───wsencuesta.js </Text>

      <SizeBox />
      <Text>Manrrique MENESES YARANGA</Text>
      <Text></Text>
      <Text></Text>
    </View>
  );
};

export default Acerca;

const styles = StyleSheet.create({
  content: {
    width: "80%",
  },
  text: {
    width: "100%",
    alignContent: "flex-start",
    alignItems: "flex-start",
  },
});
