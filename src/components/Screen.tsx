import {View, StyleSheet} from 'react-native';

import React from 'react';

type Props = {
  children: any,
  eva?: any,
  style?: any,
};

const Screen = (props: Props) => {
  return <View style={[styles.view]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: '5%',
  },
});
export default Screen;
