import {StyleSheet, View, Text} from 'react-native';
import React, {memo} from 'react';

import Screen from '../../components/Screen';
import showDates from '../../utils/showDate';

const CalendarScreen = () => {
  return (
    <Screen>
      <Text>CALENDAR</Text>
      <Text>{showDates()}</Text>
      <View style={styles.container}></View>
    </Screen>
  );
};

export default memo(CalendarScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  calendarContainer: {
    borderRadius: 5,
  },
  dayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    backgroundColor: '#20AAEA',
  },
  value: {
    fontSize: 12,
    fontWeight: '400',
  },
  calendar: {
    marginBottom: 10,
  },
});
