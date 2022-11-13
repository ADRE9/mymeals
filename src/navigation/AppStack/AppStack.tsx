import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import NavHeader from '../../components/NavHeader';
import {perfectHeight, perfectWidth} from '../../utils/perfectSize';

import type {AppStackParamList} from '../../types/navigationTypes';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          header: () => null,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
