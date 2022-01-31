import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { report } from "../services/wsencuesta";

const Resultados = () => {
  const [data, setdata] = useState([]);

  const initdata = async () => {
    const res = await report();
    setdata(res.status ? res.data : []);
  };

  useEffect(() => {
    initdata();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text>{item.music}</Text>
            <Text>{item.total}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Resultados;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  list: {
    width: "100%",
    padding: "1rem",
  },
});
