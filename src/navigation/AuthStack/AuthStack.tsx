import {View, Text, Button} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen';
import NavHeader from '../../components/NavHeader';

import type {AuthStackParamList} from '../../types/navigationTypes';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={({navigation}) => ({
          header: () => <NavHeader navigation={navigation} title="REGISTER" />,
        })}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
