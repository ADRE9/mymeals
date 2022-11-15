import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {perfectHeight} from '../utils/perfectSize';
import Animated, {FlipInXUp, FlipOutXDown} from 'react-native-reanimated';

type Props = {
  title?: string | null,
  navigation: any,
  backgroundColor?: string,
  paddingLeft?: number | string,
  paddingRight?: number | string,
  paddingTop?: number | string,
  children: any,
};

const NavHeader = (props: Props) => {
  return (
    <View
      style={[
        styles.navHeaderContainer,
        {
          backgroundColor: props.backgroundColor || '#FFFFF',
          paddingLeft: props.paddingLeft || 10,
          paddingRight: props.paddingRight || 10,
          paddingTop: props.paddingTop || 10,
        },
      ]}>
      <Text style={styles.navHeader}>{props.title}</Text>
      <Animated.View
        entering={FlipInXUp.springify()}
        exiting={FlipOutXDown.springify()}
        style={styles.lottieWrapper}>
        {props.children}
      </Animated.View>
    </View>
  );
};

export default NavHeader;

const styles = StyleSheet.create({
  navHeaderContainer: {
    height: perfectHeight(70),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  navHeader: {
    color: 'black',
    fontFamily: 'FranklinGothicHeavy',
    fontSize: 35,
  },
  lottieWrapper: {
    // // flex: 1,
    // // justifyContent: 'center',
    // // alignItems: 'center',
    // borderWidth:1
  },
});
