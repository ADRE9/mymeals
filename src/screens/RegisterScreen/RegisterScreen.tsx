import {StyleSheet, Text} from 'react-native';
import React from 'react';

import {
  perfectFontSize,
  perfectHeight,
  perfectWidth,
} from '../../utils/perfectSize';
import Screen from '../../components/Screen';
import NeuBrutalForm from '../../components/NeuBrutalForm';
import {RightArrow} from 'svg';

type Props = {
  navigation: any,
};

const RegisterScreen = (props: Props) => {
  console.log('Hello', props.navigation);
  return (
    <Screen backgroundColor="#00DB99">
      <Text style={styles.label}>Enter Your Name</Text>
      <NeuBrutalForm />
      <RightArrow height={640} />
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'FranklinGothic',
    color: 'black',
    fontSize: 20,
    marginVertical: 10,
  },
});
