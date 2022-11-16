import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import {Add, Dinner, Breakfast, Lunch} from '../assets/images/svg';
import {perfectHeight} from '../utils/perfectSize';

type Props = {};
const arr = [
  <Dinner height={perfectHeight(45)} />,
  <Lunch height={perfectHeight(45)} />,
  <Breakfast height={perfectHeight(45)} />,
];

const AddMeal = (props: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const addButtontranslateX = useSharedValue('0deg');
  const translate = useSharedValue(0);
  const opacity = useSharedValue(1);
  const buttonBorderRadius = useSharedValue(0);

  const animatedAddButtonStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {rotate: withTiming(addButtontranslateX.value, {duration: 200})},
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
      addButtontranslateX.value = '45deg';
      buttonBorderRadius.value = perfectHeight(22.5);
      translate.value = perfectHeight(50);
      opacity.value = 1;
      return;
    }
    setShowMenu(false);
    addButtontranslateX.value = '0deg';
    buttonBorderRadius.value = perfectHeight(0);
    translate.value = 0;
    opacity.value = 1;
  }, [showMenu, addButtontranslateX, buttonBorderRadius, translate, opacity]);

  const returnStyles = (index: number) => {
    if (index === 0) {
      return animatedBreakfastButtonStyles;
    }
    if (index === 1) {
      return animatedLunchButtonStyles;
    }
    return animatedDinnerButtonStyles;
  };

  return (
    <View style={styles.buttonContainer}>
      <Animated.View
        style={[styles.animatedAddViewContainer, animatedAddButtonStyles]}>
        <TouchableOpacity onPress={() => toggleMenu()} style={styles.button}>
          <Add height={perfectHeight(45)} />
        </TouchableOpacity>
      </Animated.View>
      {arr.map((item, index) => {
        return (
          <Animated.View
            style={[styles.animatedMealViewContainer, returnStyles(index)]}>
            <TouchableOpacity style={styles.button}>{item}</TouchableOpacity>
          </Animated.View>
        );
      })}
      {/* <View style={styles.cont} /> */}
    </View>
  );
};

export default AddMeal;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    height: perfectHeight(95),
    flexDirection: 'row',
  },
  animatedMealViewContainer: {
    position: 'absolute',
    backgroundColor: 'black',
    height: perfectHeight(45),
    width: perfectHeight(45),
    zIndex: 3,
  },
  button: {
    height: perfectHeight(45),
    width: perfectHeight(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedAddViewContainer: {
    // position: 'absolute',
    backgroundColor: 'black',
    zIndex: 4,
    height: perfectHeight(45),
    width: perfectHeight(45),
  },
});
