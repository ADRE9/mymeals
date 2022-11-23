import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface HookProps {
  depsArr: any[];
  index: number;
}
const useAnimatedMealButtonStyles = ({depsArr, index}: HookProps) => {
  const translateElement = useSharedValue(0);
  const buttonBorderRadius = useSharedValue(0);
  const opacity = useSharedValue(0);

  const returnStyle = () => {
    if (index === 0) {
      return [
        {translateX: withTiming(translateElement.value, {duration: 200})},
      ];
    } else if (index === 0) {
      return [
        {translateX: withTiming(-translateElement.value, {duration: 200})},
      ];
    } else {
      return [
        {translateY: withTiming(translateElement.value, {duration: 200})},
      ];
    }
  };

  const animatedMealButtonStyles = useAnimatedStyle(() => {
    return {
      transform: returnStyle(),
      borderRadius: withTiming(buttonBorderRadius.value, {duration: 200}),
      opacity: withTiming(opacity.value, {duration: 200}),
    };
  }, [depsArr]);

  return [animatedMealButtonStyles, translateElement];
};

export default useAnimatedMealButtonStyles;
