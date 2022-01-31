import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function SizeBox({ width = "1rem", height = "1rem" }) {
  const styles = StyleSheet.create({
    box: {
      width,
      height,
    },
  });
  return (
    <View style={styles.box}>
      <Text></Text>
    </View>
  );
}
