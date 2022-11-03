import {StyleSheet, Text} from 'react-native';
import React from 'react';

import Screen from '../../components/Screen';
import showDates from '../../utils/showDate';

const HomeScreen = () => {
  return (
    <Screen style={styles.screen}>
      <Text>TODAY</Text>
      <Text style={styles.date}>{showDates()}</Text>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {},
  date: {},
  cardView: {
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  fabButton: {},
  text: {
    color: 'white',
  },
});
