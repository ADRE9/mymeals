import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IUser} from '../types/types';
import {
  perfectFontSize,
  perfectHeight,
  perfectWidth,
} from '../utils/perfectSize';

type Props = {
  userData: IUser,
};

const colorPalette = [
  {color: 'Emerald', hex: '#CB6FF6'},
  {color: 'Ocean', hex: '#759CFF'},
  {color: 'XDA Fan', hex: '#3A3A3A'},
  {color: 'Classic Black', hex: '#000000'},
  {color: 'Deja Vu', hex: '#37D5D6'},
];

const ColorPalette = (props: {hex: any, color: string}) => {
  return (
    <TouchableOpacity style={styles.paletteWrapper}>
      <View style={{...styles.palette, backgroundColor: props.hex}} />
      <Text style={styles.colorText}>{props.color}</Text>
    </TouchableOpacity>
  );
};

const Menu = (props: Props) => {
  return (
    <View style={styles.menuWrapper}>
      <View style={styles.blankView} />
      <View style={styles.menuView}>
        <Text style={styles.hiText}>Hi!</Text>
        <Text style={styles.nameText}>{props.userData.name}</Text>
        <Text style={styles.contactText}>{props.userData.phoneNumber}</Text>
        <Text style={styles.contactText}>{props.userData.email}</Text>
        <Text style={styles.changeThemeText}>Change Colors</Text>
        <Text style={styles.changeThemeSubText}>
          Don't Like the colors ? Make it Monochromatic.
        </Text>
        <View style={styles.paletteView}>
          {colorPalette.map(item => {
            return <ColorPalette color={item.color} hex={item.hex} />;
          })}
        </View>
        <View />
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menuWrapper: {
    flex: 1,
    // backgroundColor: 'blue',
    flexDirection: 'row',
  },
  blankView: {
    flex: 1,
  },
  menuView: {
    flex: 1,
    paddingTop: perfectHeight(30),
    paddingLeft: perfectWidth(20),
    marginHorizontal: perfectWidth(20),
  },
  hiText: {
    color: 'white',
    fontFamily: 'FranklinGothicHeavy',
    fontSize: perfectFontSize(30),
  },
  nameText: {
    color: 'white',
    fontFamily: 'FranklinGothicHeavy',
    fontSize: perfectFontSize(30),
    paddingBottom: perfectHeight(5),
  },
  contactText: {
    color: 'white',
    fontFamily: 'FranklinGothicDemi',
    fontSize: perfectFontSize(15),
  },
  changeThemeText: {
    color: 'white',
    paddingTop: perfectHeight(30),
    fontFamily: 'FranklinGothicHeavy',
    fontSize: perfectFontSize(25),
  },
  changeThemeSubText: {
    color: 'white',
    // paddingTop: perfectHeight(30),
    fontFamily: 'FranklinGothicDemi',
    fontSize: perfectFontSize(15),
  },
  paletteWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: perfectHeight(10),
  },
  palette: {
    width: perfectHeight(25),
    height: perfectHeight(25),
    borderRadius: perfectHeight(13),
    borderWidth: 1,
    borderColor: 'white',
  },
  paletteView: {
    paddingTop: perfectHeight(30),
    paddingLeft: perfectWidth(10),
  },
  colorText: {
    color: 'white',
    fontSize: perfectFontSize(15),
    paddingLeft: perfectWidth(20),
    fontFamily: 'FranklinGothicHeavy',
  },
});
