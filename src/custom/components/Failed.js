import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONT_SIZE} from '../../../static';

const Failed = ({message = 'Ocurrieron Errores'}) => {
  return (
    <View>
      <Text style={styles.label}>{message}</Text>
    </View>
  );
};

export default Failed;

const styles = StyleSheet.create({
  label: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 0.85 * FONT_SIZE,
  },
});
