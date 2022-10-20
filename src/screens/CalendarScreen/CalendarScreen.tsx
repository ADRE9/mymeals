import {StyleSheet} from 'react-native';
import React, {memo, useCallback, useMemo, useState, useContext} from 'react';
import {Text, useTheme} from '@ui-kitten/components';
import {Layout} from '@ui-kitten/components';
import {Calendar, CalendarUtils} from 'react-native-calendars';

import Screen from '../../components/Screen';
import showDates from '../../utils/showDate';
import showInitialDates from '../../utils/showInitialDate';
import {db} from '../../db';
import {DataContext} from '../../contexts/DataContext';

const NOW = showInitialDates();
const START = '2022-10-01';

const CalendarScreen = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(NOW);

  const {data} = useContext(DataContext);

  console.log(
    '🚀 ~ file: CalendarScreen.tsx ~ line 22 ~ CalendarScreen ~ data',
    data,
  );

  const getDate = (count: number) => {
    const date = new Date(NOW);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const onDayPress = useCallback(day => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    const selectedString: string = selected.toString();
    return {
      ...data,
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        dots: data.hasOwnProperty(selected) ? data[selectedString].dots : null,
        selectedColor: 'black',
        selectedTextColor: 'white',
      },
    };
  }, [selected, data]);

  return (
    <Screen>
      <Text category="h1">CALENDAR</Text>
      <Text>{showDates()}</Text>
      <Layout style={styles.container}>
        <Layout
          style={[
            styles.calendarContainer,
            {backgroundColor: theme['color-info-600']},
          ]}>
          <Calendar
            markingType={'multi-dot'}
            enableSwipeMonths
            current={NOW}
            initialDate={NOW}
            minDate={START}
            maxDate={getDate(1)}
            style={styles.calendar}
            onDayPress={onDayPress}
            markedDates={marked}
          />
        </Layout>
      </Layout>
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
