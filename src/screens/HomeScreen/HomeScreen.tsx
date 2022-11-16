import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import {useSelector} from 'react-redux';

import {User, Cross} from 'svg';
import ScrollScreen from '../../components/ScrollScreen';
import showDates from '../../utils/showDate';
import {
  perfectFontSize,
  perfectHeight,
  perfectWidth,
} from '../../utils/perfectSize';

//types
import {RootState} from '../../redux/slices';
import {IUser} from '../../types/types';
import {Calendar, CalendarUtils} from 'react-native-calendars';
import MealCard from '../../components/MealCard';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {windowWidth} from '../../utils/dimensions';
import Menu from '../../components/Menu';

interface Props {
  navigation: any;
}

const INITIAL_DATE = '2022-07-06';

const HomeScreen = ({navigation}: Props) => {
  const userData: IUser = useSelector((state: RootState) => state.user);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const top = useSharedValue(0);
  const right = useSharedValue(0);
  const borderRadius = useSharedValue(0);

  const [selected, setSelected] = useState(INITIAL_DATE);
  // const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const onDayPress = useCallback(
    (day: {dateString: React.SetStateAction<string>}) => {
      setSelected(day.dateString);
    },
    [],
  );

  const mainPageStyles = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value),
      right: withSpring(right.value),
      borderRadius: withTiming(borderRadius.value, {duration: 500}),
    };
  }, [showMenu]);

  const toggleMenu = () => {
    if (showMenu === false) {
      setShowMenu(true);
      top.value = 100;
      right.value = windowWidth / 2;
      borderRadius.value = 20;
      return;
    }
    setShowMenu(false);
    top.value = 0;
    right.value = 0;
    borderRadius.value = 0;
  };

  const marked = useMemo(() => {
    return {
      [getDate(-1)]: {
        dotColor: 'red',
        marked: true,
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: 'orange',
        selectedTextColor: 'red',
      },
    };
  }, [selected]);

  return (
    <View style={styles.backView}>
      <Menu showMenu={showMenu} userData={userData} />
      <Animated.View style={[styles.animatedView, mainPageStyles]}>
        <ScrollScreen paddingHorizontal={perfectWidth(20)}>
          <View style={styles.topView}>
            <Text style={styles.todayText}>TODAY</Text>
            <TouchableOpacity onPress={() => toggleMenu()}>
              {showMenu ? (
                <Cross height={perfectHeight(30)} />
              ) : (
                <User height={perfectHeight(30)} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.greet}>Hi {userData.name} !</Text>
          <Text style={styles.date}>{showDates()}</Text>
          <Calendar
            style={styles.calendar}
            current={INITIAL_DATE}
            enableSwipeMonths
            // displayLoadingIndicator
            markingType={'multi-dot'}
            hideExtraDays
            theme={{
              calendarBackground: '#000000',
              textSectionTitleColor: 'white',
              textSectionTitleDisabledColor: 'gray',
              dayTextColor: 'white',
              todayTextColor: 'orange',
              selectedDayTextColor: 'orange',
              monthTextColor: 'white',
              indicatorColor: 'white',
              textDayFontFamily: 'FranklinGothicHeavy',
              selectedDayBackgroundColor: '#eeeeee',
              arrowColor: 'white',
              // textDisabledColor: 'red',
              stylesheet: {
                calendar: {
                  header: {
                    week: {
                      marginTop: 30,
                      marginHorizontal: 12,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    },
                  },
                },
              },
            }}
            firstDay={1}
            // markedDates={{
            //   [getDate(2)]: {
            //     selected: true,
            //     dots: [
            //       {key: 'vacation', color: 'blue', selectedDotColor: 'red'},
            //       {key: 'massage', color: 'red', selectedDotColor: 'white'},
            //     ],
            //   },
            //   [getDate(3)]: {
            //     disabled: true,
            //     dots: [
            //       {key: 'vacation', color: 'green', selectedDotColor: 'red'},
            //       {key: 'massage', color: 'red', selectedDotColor: 'green'},
            //     ],
            //   },
            // }}
            hideArrows={true}
            onDayPress={onDayPress}
          />
          <MealCard mealType="Breakfast" />
          <MealCard />
          <MealCard />
          <MealCard />
        </ScrollScreen>
      </Animated.View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  date: {
    fontFamily: 'FranklinGothicDemi',
    color: 'black',
    fontSize: perfectFontSize(22),
  },
  greet: {
    fontFamily: 'FranklinGothicHeavy',
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
    fontFamily: 'FranklinGothicHeavy',
    color: 'black',
    fontSize: perfectFontSize(50),
    // marginVertical: 10,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendar: {
    marginVertical: perfectHeight(30),
    borderRadius: perfectFontSize(10),
  },
  backView: {
    flex: 1,
    backgroundColor: '#000000',
  },
  animatedView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 2,
  },
});
