import {View, Text, Button} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen';
import NavHeader from '../../components/NavHeader';

import type {AuthStackParamList} from '../../types/navigationTypes';
import {perfectHeight, perfectWidth} from '../../utils/perfectSize';

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
              backgroundColor="#00DB99"
              paddingRight={perfectWidth(60)}
              paddingLeft={perfectWidth(60)}
              paddingTop={perfectHeight(24)}
              navigation={navigation}
              title="REGISTER"
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
