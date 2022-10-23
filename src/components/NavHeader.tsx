import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type Props = {
  title?: string | null,
  navigation: any,
};

const NavHeader = (props: Props) => {
  return (
    <View style={styles.navHeaderContainer}>
      <Text style={styles.navHeader}>{props.title}</Text>
      <TouchableOpacity>
        <Text>Already a User ?</Text>
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
    backgroundColor: 'white',
  },
  navHeader: {
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'FranklinGothic',
    fontSize: 25,
  },
});
