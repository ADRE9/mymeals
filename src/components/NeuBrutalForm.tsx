import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

type Props = {};

const NeuBrutalForm = (props: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} />
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
    top: 4,
    left: 3,
  },
  textInput: {
    position: 'absolute',
    borderWidth: 2,
    borderRadius: 5,
    zIndex: 2,
    bottom: 4,
    right: 3,
    height: 40,
    width: '100%',
    shadowColor: 'black',
    shadowOpacity: 1,
    backgroundColor: 'white',
    fontFamily: 'FranklinGothic',
    paddingHorizontal: 10,
  },
});
