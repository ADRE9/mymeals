import {StyleSheet} from 'react-native';
import React, {useContext, useEffect, useCallback} from 'react';
import {Layout, Text} from '@ui-kitten/components';

import Screen from '../../components/Screen';
import showDates from '../../utils/showDate';
import {useFocusEffect} from '@react-navigation/native';
import Card from '../../components/Card';
import {DataContext} from '../../contexts/DataContext';
import {ICalendarData, ICalendarDate, IDot} from '../../types/Calendar';
import showInitialDates from '../../utils/showInitialDate';
import FabButton from '../../components/FabButton';
import dateFormatter from '../../utils/dateFormatter';

const TODAY = showInitialDates().replace(/'/g, '"');

const HomeScreen = () => {
  const {data, getData, addMeal, addDots} = useContext(DataContext);

  // console.log('🚀 ~ file: HomeScreen.tsx ~ line 13 ~ HomeScreen ~ data', data);

  const getDataFromStorage = useCallback(() => {
    getData();
  }, [getData]);

  const addDotToDate = useCallback(
    (dataObject: IDot, quantity: number) => {
      addDots(dataObject, TODAY, quantity);
    },
    [addDots],
  );

  useFocusEffect(() => {
    getDataFromStorage();
  });

  const renderTodaysCard = () => {
    let DINNER = 0;
    let LUNCH = 0;
    console.log('Data is', data);
    if (data) {
      return (
        <Text category="h5" style={styles.text}>
          No Meals Today
        </Text>
      );
    }
    if (data && data[TODAY]) {
      data[TODAY].dots.map((meal: IDot) => {
        if (meal.key.toLowerCase().includes('dinner')) {
          DINNER = DINNER + 1;
        } else {
          LUNCH = LUNCH + 1;
        }
      });
      return (
        <>
          {LUNCH !== 0 ? (
            <Card
              addDotToDate={addDotToDate}
              TODAY={TODAY}
              type="lunch"
              quantity={LUNCH}
            />
          ) : (
            <Text category="h6" style={styles.text}>
              No Lunch Today
            </Text>
          )}
          {DINNER !== 0 ? (
            <Card
              addDotToDate={addDotToDate}
              TODAY={TODAY}
              type="dinner"
              quantity={DINNER}
            />
          ) : (
            <Text category="h6" style={styles.text}>
              No Dinner Today
            </Text>
          )}
        </>
      );
    }
    return null;
  };

  return (
    <Screen style={styles.screen}>
      <Text category="h1">TODAY</Text>
      <Text category="h6" style={styles.date}>
        {showDates()}
      </Text>
      <Layout style={styles.cardView}>{renderTodaysCard()}</Layout>
      <FabButton date={TODAY} addMeal={addMeal} />
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
