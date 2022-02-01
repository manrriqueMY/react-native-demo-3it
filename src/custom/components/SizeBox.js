import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {FONT_SIZE} from '../../../static';

export default function SizeBox({width = FONT_SIZE, height = FONT_SIZE}) {
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
