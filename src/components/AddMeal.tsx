import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Add, Dinner, Breakfast, Lunch} from '../assets/images/svg';
import {perfectHeight} from '../utils/perfectSize';
import {mealAdded, mealAddedOnSameDay} from '../redux/slices/meal/mealSlice';
import {useDispatch, useSelector} from 'react-redux';
import {ICalendarData} from '../types/Calendar';
import {RootState} from '../redux/slices';
import generateMeal from '../utils/generateMeal';
import generateDay from '../utils/generateDay';
import dotSlice, {
  selectAllDots,
  selectDotsEntities,
  selectAll,
  dotSelectors,
  addDot,
} from '../redux/slices/dots/dotSlice';

interface Props {
  selectedDay: string;
}

const arr = [
  <Dinner height={perfectHeight(45)} />,
  <Lunch height={perfectHeight(45)} />,
  <Breakfast height={perfectHeight(45)} />,
];

const AddMeal = ({selectedDay}: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const meals: ICalendarData = useSelector(
    (state: RootState) => state.meals.entities,
  );
  const dotsArray: string[] = useSelector(dotSelectors.selectIds);

  const dispatch = useDispatch();

  const addButtonRotate = useSharedValue(0);
  const translate = useSharedValue(0);
  const opacity = useSharedValue(1);
  const buttonBorderRadius = useSharedValue(0);

  const animatedAddButtonStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withTiming(`${addButtonRotate.value}deg`, {
            duration: 200,
          }),
        },
      ],
      borderRadius: withTiming(buttonBorderRadius.value, {duration: 200}),
    };
  }, [showMenu]);

  const animatedBreakfastButtonStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(-translate.value, {duration: 200})}],
      borderRadius: withTiming(buttonBorderRadius.value, {duration: 200}),
      opacity: withTiming(opacity.value, {duration: 200}),
    };
  }, [showMenu]);
  const animatedLunchButtonStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: withTiming(translate.value, {duration: 200})}],
      borderRadius: withTiming(buttonBorderRadius.value, {duration: 200}),
      opacity: withTiming(opacity.value, {duration: 200}),
    };
  }, [showMenu]);
  const animatedDinnerButtonStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateX: withTiming(translate.value, {duration: 200})}],
      borderRadius: withTiming(buttonBorderRadius.value, {duration: 200}),
      opacity: withTiming(opacity.value, {duration: 200}),
    };
  }, [showMenu]);

  const toggleMenu = useCallback(() => {
    if (!showMenu) {
      setShowMenu(true);
      addButtonRotate.value = 45;
      buttonBorderRadius.value = perfectHeight(22.5);
      translate.value = perfectHeight(60);
      opacity.value = 1;
      return;
    }
    setShowMenu(false);
    addButtonRotate.value = 0;
    buttonBorderRadius.value = perfectHeight(0);
    translate.value = 0;
    opacity.value = 1;
  }, [showMenu, addButtonRotate, buttonBorderRadius, translate, opacity]);

  const returnStyles = (index: number) => {
    if (index === 0) {
      return animatedBreakfastButtonStyles;
    }
    if (index === 1) {
      return animatedLunchButtonStyles;
    }
    return animatedDinnerButtonStyles;
  };

  const handleMealClick = useCallback(
    (index: number) => {
      if (meals[selectedDay]) {
        const dayData = generateMeal(
          meals[selectedDay],
          index,
          dotsArray,
          dispatch,
        );
        const updatedData = {
          ...meals[selectedDay],
          dots: [...meals[selectedDay].dots, dayData],
        };
        dispatch(mealAddedOnSameDay(updatedData));
        return;
      }
      const data = generateDay(selectedDay, index);
      dispatch(mealAdded(data));
    },
    [dispatch, meals, selectedDay],
  );

  return (
    <View style={styles.buttonContainer}>
      <Animated.View style={[styles.addViewContainer, animatedAddButtonStyles]}>
        <TouchableOpacity onPress={() => toggleMenu()} style={styles.button}>
          <Add height={perfectHeight(45)} />
        </TouchableOpacity>
      </Animated.View>
      {arr.map((item, index) => {
        return (
          <Animated.View
            style={[styles.mealViewContainer, returnStyles(index)]}>
            <TouchableOpacity
              onPress={() => handleMealClick(index)}
              style={styles.button}>
              {item}
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

export default AddMeal;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    height: perfectHeight(105),
    flexDirection: 'row',
  },
  mealViewContainer: {
    position: 'absolute',
    backgroundColor: 'black',
    height: perfectHeight(45),
    width: perfectHeight(45),
    zIndex: 3,
    elevation: 2,
  },
  button: {
    height: perfectHeight(45),
    width: perfectHeight(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  addViewContainer: {
    backgroundColor: 'black',
    zIndex: 4,
    height: perfectHeight(45),
    width: perfectHeight(45),
    elevation: 3,
  },
});
