import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Success = ({ message = "Encuesta Agregada Correctamente" }) => {
  return (
    <View>
      <Text style={styles.label}>{message}</Text>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  label: {
    color: "green",
    fontWeight: "bold",
    fontSize: "0.85rem",
  },
});
