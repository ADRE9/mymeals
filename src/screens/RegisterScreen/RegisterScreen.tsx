import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Screen from '../../components/Screen';
import NeuBrutalForm from '../../components/NeuBrutalForm';

type Props = {
  navigation: any,
};

const RegisterScreen = (props: Props) => {
  console.log('Hello', props.navigation);
  return (
    <Screen>
      <Text style={styles.label}>Enter Your Name</Text>
      <NeuBrutalForm />
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'FranklinGothic',
  },
});
