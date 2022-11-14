import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Lottie from 'lottie-react-native';

import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen';
import NavHeader from '../../components/NavHeader';

import type {AuthStackParamList} from '../../types/navigationTypes';
import {
  perfectFontSize,
  perfectHeight,
  perfectWidth,
} from '../../utils/perfectSize';
import {windowWidth} from '../../utils/dimensions';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={({navigation}) => ({
          header: () => (
            <NavHeader
              backgroundColor="#FFF"
              paddingRight={perfectWidth(20)}
              paddingLeft={perfectWidth(20)}
              paddingTop={perfectHeight(24)}
              navigation={navigation}
              title="REGISTER">
              <Lottie
                style={styles.lottie}
                source={require('../../assets/lotties/foodies.json')}
                autoPlay
              />
            </NavHeader>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'FranklinGothic',
    color: 'black',
    fontSize: perfectFontSize(20),
    marginVertical: 10,
  },
  buttonContainer: {
    height: perfectHeight(80),
    width: perfectHeight(80),
    justifyContent: 'center',
    alignItems: 'center',
    justifySelf: 'flex-end',
  },
  nextButton: {
    width: '100%',
  },
  fieldWrapper: {
    width: windowWidth,
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: perfectWidth(20),
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: perfectHeight(80),
    paddingHorizontal: perfectWidth(20),
    bottom: perfectHeight(20),
  },
  login: {
    fontSize: perfectFontSize(18),
    fontFamily: 'FranklinGothic',
    color: 'blue',
    fontWeight: '100',
  },
  back: {
    fontSize: perfectFontSize(18),
    fontFamily: 'FranklinGothic',
    fontWeight: '100',
    color: 'black',
  },
  lottie: {
    width: 50,
    height: 50,
  },
});
