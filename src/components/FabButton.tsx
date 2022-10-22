import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@ui-kitten/components';
import {Icon} from '@ui-kitten/components';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  date: string,
  addMeal: (date: string, type: string) => void,
};

const Actions = ['sun-outline', 'moon-outline'];

const FabButton = (props: Props) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const rotate = useSharedValue(0);
  const opacity = useSharedValue(0);
  const margin = useSharedValue(-100);

  const toggleFab = () => {
    setIsOpen(prev => !prev);
    if (isOpen) {
      opacity.value = withSpring(1);
      margin.value = withSpring(10);
      rotate.value = withSpring(45);
    } else {
      opacity.value = withSpring(0);
      margin.value = withSpring(-50);
      rotate.value = withSpring(0);
    }
  };

  const animatedRotationStyles = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotate.value}deg`}],
    };
  }, []);

  const animatedSecondaryButtonStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      marginBottom: margin.value,
    };
  }, []);

  const addMeals = (type: string) => {
    props.addMeal(props.date, type);
    toggleFab();
  };

  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback
        onPress={() => addMeals('dinner')}
        key={Actions[1]}>
        <Animated.View
          style={[
            styles.container,
            styles.secondary,
            {
              backgroundColor: theme['color-primary-100'],
              shadowColor: theme['color-primary-100'],
            },
            animatedSecondaryButtonStyles,
          ]}>
          <Icon
            style={styles.secondaryIcon}
            fill={theme['color-primary-900']}
            name={Actions[1]}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => addMeals('lunch')}
        key={Actions[0]}>
        <Animated.View
          style={[
            styles.container,
            styles.secondary,
            {
              backgroundColor: theme['color-primary-100'],
              shadowColor: theme['color-primary-100'],
            },
            animatedSecondaryButtonStyles,
          ]}>
          <Icon
            style={styles.secondaryIcon}
            fill={theme['color-primary-900']}
            name={Actions[0]}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => toggleFab()}>
        <Animated.View
          style={[
            styles.container,
            {
              backgroundColor: theme['color-danger-500'],
              shadowColor: theme['color-danger-400'],
            },
            animatedRotationStyles,
          ]}>
          <Icon
            style={styles.icon}
            fill={theme['color-primary-100']}
            name="plus-outline"
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default FabButton;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    zIndex: 2,
  },
  icon: {
    width: 30,
    height: 30,
  },
  secondary: {
    position: 'relative',
    width: 40,
    height: 40,
  },
  secondaryIcon: {
    width: 25,
    height: 25,
  },
  wrapper: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    alignItems: 'center',
  },
});
