import {ScrollView, StyleSheet} from 'react-native';

import React from 'react';
import {perfectHeight} from '../utils/perfectSize';

type Props = {
  children: any,
  eva?: any,
  style?: any,
  backgroundColor?: string,
  paddingHorizontal?: number,
};

const ScrollScreen = (props: Props) => {
  return (
    <ScrollView
      style={[
        styles.scrollView,
        {
          backgroundColor: props.backgroundColor || '#FFFFFF',
          paddingHorizontal: props.paddingHorizontal || 0,
        },
      ]}>
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    position: 'relative',
    flex: 1,
    // paddingTop: 10,
    // paddingHorizontal: '5%',
  },
});
export default ScrollScreen;
