import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONT_SIZE} from '../../../static';

const ErrorLabel = () => {
  return (
    <View>
      <Text style={styles.label}>Campo Requerido</Text>
    </View>
  );
};

export default ErrorLabel;

const styles = StyleSheet.create({
  label: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 0.85 * FONT_SIZE,
  },
});
