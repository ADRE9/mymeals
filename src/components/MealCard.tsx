import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {perfectHeight, perfectWidth} from '../utils/perfectSize';

type Props = {};

const MealCard = (props: Props) => {
  return (
    <View style={styles.neuWrapper}>
      <View style={styles.neuCard}></View>
    </View>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  neuWrapper: {
    position: 'relative',
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: 'black',
    width: perfectWidth(340),
    height: perfectHeight(140),
    top: 5,
    left: 5,
    marginBottom: perfectHeight(30),
  },
  neuCard: {
    position: 'absolute',
    borderWidth: 5,
    borderRadius: 5,
    zIndex: 2,
    bottom: 5,
    right: 5,
    height: perfectHeight(140),
    width: perfectWidth(340),
    color: 'white',
    shadowColor: 'black',
    shadowOpacity: 1,
    backgroundColor: 'white',
    fontFamily: 'FranklinGothic',
    paddingHorizontal: 10,
  },
});
