import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

import {
  perfectFontSize,
  perfectHeight,
  perfectWidth,
} from '../utils/perfectSize';
import NeuButton from './NeuButton';
import {ICalendarData, ICalendarDate} from '../types/Calendar';
import generateMeal from '../utils/generateMeal';
import {useDispatch, useSelector} from 'react-redux';
import {
  mealAddedOnSameDay,
  selectMealsEntities,
} from '../redux/slices/meal/mealSlice';

type Props = {
  type: string,
  quantity: number,
  selectedDay: string,
};

const MealCard = (props: Props) => {
  const dispatch = useDispatch();

  const meals: ICalendarData = useSelector(selectMealsEntities);

  const returnIndex = useCallback(() => {
    return props.type === 'dinner' ? 0 : props.type === 'lunch' ? 1 : 2;
  }, [props.type]);

  const handleAddClick = useCallback(() => {
    const dayData = generateMeal(
      meals[props.selectedDay],
      returnIndex(),
      dispatch,
    );
    const updatedData: ICalendarDate = {
      ...meals[props.selectedDay],
      dots: [...meals[props.selectedDay].dots, dayData],
    };
    dispatch(mealAddedOnSameDay(updatedData));
  }, [dispatch, meals, props.selectedDay, returnIndex]);

  const handleRemoveClick = useCallback(() => {
    const updatedData: ICalendarDate = {
      ...meals[props.selectedDay],
      dots: meals[props.selectedDay].dots.filter(dot => {
        return (
          dot !==
          props.type.replace(/^\w/, c => c.toUpperCase()) + props.quantity
        );
      }),
    };
    console.log('Updated Data', updatedData);
    dispatch(mealAddedOnSameDay(updatedData));
  }, [dispatch, meals, props.quantity, props.selectedDay, props.type]);

  return (
    <Animated.View
      entering={FadeInDown}
      exiting={FadeInUp}
      style={styles.neuWrapper}>
      <View
        style={{
          ...styles.neuCard,
          backgroundColor:
            props.type === 'breakfast'
              ? 'yellow'
              : props.type === 'lunch'
              ? '#00DB99'
              : '#F97700',
        }}>
        <View style={styles.topView}>
          <Text style={styles.mealTypeText}>{props.type.toUpperCase()}</Text>
          <Text style={styles.mealQuantityText}>{props.quantity}</Text>
        </View>
        <View style={styles.bottomView}>
          <NeuButton
            onPress={handleAddClick}
            width={perfectWidth(120)}
            height={perfectHeight(40)}
            name="ADD"
          />
          <NeuButton
            onPress={handleRemoveClick}
            width={perfectWidth(120)}
            height={perfectHeight(40)}
            name="REMOVE"
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  neuWrapper: {
    position: 'relative',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: 'black',
    width: perfectWidth(340),
    height: perfectHeight(140),
    top: 5,
    left: 5,
    marginBottom: perfectHeight(30),
  },
  neuCard: {
    position: 'absolute',
    borderWidth: 5,
    borderRadius: 5,
    zIndex: 2,
    bottom: 5,
    right: 5,
    height: perfectHeight(140),
    width: perfectWidth(340),
    color: 'white',
    shadowColor: 'black',
    shadowOpacity: 1,
    backgroundColor: 'white',
    fontFamily: 'FranklinGothic',
    paddingHorizontal: 10,
  },
  topView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mealTypeText: {
    color: 'black',
    fontFamily: 'FranklinGothicHeavy',
    fontSize: perfectFontSize(40),
  },
  mealQuantityText: {
    color: 'black',
    fontFamily: 'FranklinGothicHeavy',
    fontSize: perfectFontSize(30),
  },
});
