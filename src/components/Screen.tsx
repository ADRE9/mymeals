import {View, StyleSheet} from 'react-native';

import React from 'react';

type Props = {
  children: any,
  eva?: any,
  style?: any,
  backgroundColor?: string,
};

const Screen = (props: Props) => {
  return (
    <View
      style={[
        styles.view,
        {backgroundColor: props.backgroundColor || '#FFFFF'},
      ]}>
      {props.children}
    </View>
  );
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
