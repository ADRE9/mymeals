import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {User} from 'svg';

import Screen from '../../components/Screen';
import showDates from '../../utils/showDate';
import {
  perfectFontSize,
  perfectHeight,
  perfectWidth,
} from '../../utils/perfectSize';

const HomeScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.topView}>
        <Text style={styles.todayText}>TODAY</Text>
        <TouchableOpacity>
          <User height={perfectHeight(30)} />
        </TouchableOpacity>
      </View>
      <Text style={styles.date}>{showDates()}</Text>
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
  todayText: {
    fontFamily: 'FranklinGothic',
    color: 'black',
    fontSize: perfectFontSize(50),
    marginVertical: 10,
  },
  topView: {
    paddingHorizontal: perfectWidth(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
