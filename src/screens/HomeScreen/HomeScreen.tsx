import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {User} from 'svg';

import Screen from '../../components/Screen';
import {useSelector} from 'react-redux';
import showDates from '../../utils/showDate';
import {
  perfectFontSize,
  perfectHeight,
  perfectWidth,
} from '../../utils/perfectSize';

//types
import {RootState} from 'redux/slices';
import {IUser} from 'types/types';

const HomeScreen = ({navigation}) => {
  const userData: IUser = useSelector((state: RootState) => state.user);

  console.log(
    '🚀 ~ file: HomeScreen.tsx ~ line 18 ~ HomeScreen ~ userData',
    userData,
  );

  return (
    <Screen paddingHorizontal={perfectWidth(20)}>
      <View style={styles.topView}>
        <Text style={styles.todayText}>TODAY</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Account')}>
          <User height={perfectHeight(30)} />
        </TouchableOpacity>
      </View>
      <Text style={styles.greet}>Hi {userData.username} !</Text>
      <Text style={styles.date}>{showDates()}</Text>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  date: {
    fontFamily: 'GothicA1-Bold',
    color: 'black',
    fontSize: perfectFontSize(22),
  },
  greet: {
    fontFamily: 'GothicA1-ExtraBold',
    color: 'black',
    fontSize: perfectFontSize(27),
  },
  cardView: {
    marginTop: 20,
    backgroundColor: 'transparent',
  },
  fabButton: {},
  text: {
    color: 'white',
  },
  todayText: {
    fontFamily: 'GothicA1-Black',
    color: 'black',
    fontSize: perfectFontSize(50),
    // marginVertical: 10,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
