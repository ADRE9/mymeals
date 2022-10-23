import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

type Props = {};

const NeuBrutalForm = (props: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput}></TextInput>
      <View style={styles.shadowContainer}></View>
    </View>
  );
};

export default NeuBrutalForm;

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    borderRadius: 5,
    backgroundColor: 'black',
    width: '100%',
    height: 40,
    top: 3,
    left: 3,
  },
  textInput: {
    position: 'absolute',
    borderWidth: 2,
    borderRadius: 5,
    zIndex: 2,
    bottom: 3,
    right: 3,
    height: 40,
    width: '100%',
    shadowColor: 'black',
    shadowOpacity: 1,
    backgroundColor: 'white',
  },
});
