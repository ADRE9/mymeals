import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type Props = {
  title?: string | null,
  navigation: any,
  backgroundColor?: string,
};

const NavHeader = (props: Props) => {
  return (
    <View
      style={[
        styles.navHeaderContainer,
        {backgroundColor: props.backgroundColor || '#FFFFF'},
      ]}>
      <Text style={styles.navHeader}>{props.title}</Text>
      <TouchableOpacity>
        <Text style={styles.login}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavHeader;

const styles = StyleSheet.create({
  navHeaderContainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  navHeader: {
    color: 'black',
    fontFamily: 'FranklinGothic',
    fontSize: 35,
  },
  login: {
    fontFamily: 'FranklinGothic',
    color: 'black',
  },
});
