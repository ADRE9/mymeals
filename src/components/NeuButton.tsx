import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  name: string,
  height: number,
  width: number,
  onPress: () => void,
};

const NeuButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={{
        ...styles.buttonContainer,
        height: props.height,
        width: props.width,
      }}>
      <View
        style={{...styles.button, height: props.height, width: props.width}}>
        <Text style={styles.buttonNameText}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NeuButton;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'relative',
    borderRadius: 5,
    backgroundColor: 'black',
    top: 4,
    left: 3,
  },
  button: {
    position: 'absolute',
    borderWidth: 2,
    borderRadius: 5,
    zIndex: 2,
    bottom: 3,
    right: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonNameText: {
    fontFamily: 'FranklinGothicDemi',
    color: 'black',
  },
});
