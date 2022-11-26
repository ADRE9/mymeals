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
  withTiming,
} from 'react-native-reanimated';
import {windowWidth} from '../../utils/dimensions';
import Menu from '../../components/Menu';
import AddMeal from '../../components/AddMeal';
import showInitialDates from '../../utils/showInitialDate';
import {ICalendarData, IDot} from '../../types/Calendar';
import {allMealsSelector} from '../../redux/slices/meal/mealSlice';

interface Props {
  navigation: any;
}

const INITIAL_DATE = showInitialDates();

const HomeScreen = ({navigation}: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(INITIAL_DATE);

  const top = useSharedValue(0);
  const right = useSharedValue(0);
  const borderRadius = useSharedValue(0);

  const user: IUser = useSelector((state: RootState) => state.user);
  const mealData = useSelector(allMealsSelector);

  const onDayPress = useCallback(
    (day: {dateString: React.SetStateAction<string>}) => {
      setSelected(day.dateString);
    },
    [],
  );

  const mainPageStyles = useAnimatedStyle(() => {
    return {
      top: withTiming(top.value, {duration: 500}),
      right: withTiming(right.value, {duration: 500}),
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
    const selectedDate = mealData[selected];
    return {
      [selected]: {
        selected: true,
        ...selectedDate,
      },
    };
  }, [mealData, selected]);

  return (
    <View style={styles.backView}>
      <Menu showMenu={showMenu} userData={user} />
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
          <Text style={styles.greet}>Hi {user.name} !</Text>
          <Text style={styles.date}>{showDates()}</Text>
          <Calendar
            style={styles.calendar}
            current={selected}
            marked={true}
            enableSwipeMonths
            markingType={'multi-dot'}
            hideExtraDays
            theme={{
              calendarBackground: '#000000',
              textSectionTitleColor: 'white',
              textSectionTitleDisabledColor: 'gray',
              dayTextColor: 'white',
              todayTextColor: '#00AAAF',
              selectedDayTextColor: '#00AAAF',
              monthTextColor: 'white',
              indicatorColor: 'white',
              textDayFontFamily: 'FranklinGothicHeavy',
              selectedDayBackgroundColor: '#eeeeee',
              arrowColor: 'white',
              // textDisabledColor: 'gray',
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
            markedDates={marked}
            hideArrows={true}
            onDayPress={onDayPress}
          />
          <AddMeal selectedDay={selected} />
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
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendar: {
    marginVertical: perfectHeight(30),
    borderRadius: perfectFontSize(10),
    overflow: 'hidden',
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

// const getDate = (count: number) => {
//   const date = new Date(showInitialDates());
//   const newDate = date.setDate(date.getDate() + count);
//   return CalendarUtils.getCalendarDateString(newDate);
// };
