import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';

import {perfectHeight} from '../utils/perfectSize';
import {windowWidth} from '../utils/dimensions';
import {SwipeRightArrow} from '../assets/images/svg';
import {useDispatch} from 'react-redux';

type Props = {
  actionName: string,
  dispatch?: any,
  action: any,
};
const INITIAL_POINT = perfectHeight(2);
const BOX_PADDING = perfectHeight(68);
const EXTRA_OFFSET = perfectHeight(50);
const BOX_WIDTH = windowWidth / 2 - BOX_PADDING;
const FINALPOINT = BOX_WIDTH - EXTRA_OFFSET;

const SlideToDoAction = (props: Props) => {
  const isPressed = useSharedValue(false);
  const offsetX = useSharedValue(INITIAL_POINT);
  // const [showText, setShowText] = useState(true);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: offsetX.value},
        {scale: withSpring(isPressed.value ? 0.9 : 1)},
      ],
      backgroundColor: isPressed.value ? 'yellow' : 'blue',
    };
  });

  const completeAction = () => {
    if (props.dispatch) {
      console.log('I am running');
      props.dispatch(props.action());
      return;
    }
    console.log('I am running');

    props.action();
  };

  const gesture = Gesture.Pan()
    .onBegin(() => {
      'worklet';
      isPressed.value = true;
    })
    .onChange(e => {
      'worklet';
      const totalXTranslation = e.changeX + offsetX.value;
      offsetX.value =
        totalXTranslation > BOX_WIDTH ? FINALPOINT : totalXTranslation;
    })
    .onFinalize(() => {
      'worklet';
      isPressed.value = false;
      if (offsetX.value > FINALPOINT) {
        console.log('I am inside if');

        offsetX.value = BOX_WIDTH;
        runOnJS(completeAction)();
        return;
      }
      offsetX.value = withTiming(INITIAL_POINT, {
        duration: 200,
      });
    });

  return (
    <View style={styles.slideContainer}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.ball, animatedStyles]}>
          <SwipeRightArrow height={perfectHeight(10)} />
        </Animated.View>
      </GestureDetector>
      <Text style={styles.actionText}>SLIDE TO {props.actionName}</Text>
    </View>
  );
};

export default SlideToDoAction;

const styles = StyleSheet.create({
  slideContainer: {
    width: '100%',
    backgroundColor: 'black',
    height: perfectHeight(50),
    borderRadius: perfectHeight(25),
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: perfectHeight(2),
    borderColor: 'white',
  },
  ball: {
    width: perfectHeight(42),
    height: perfectHeight(42),
    borderWidth: perfectHeight(2),
    borderColor: 'white',
    borderRadius: perfectHeight(20),
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  actionText: {
    position: 'absolute',
    left: perfectHeight(48),
    color: 'white',
  },
});
