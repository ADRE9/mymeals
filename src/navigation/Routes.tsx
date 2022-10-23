import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import type {RootState} from '../redux/features';
import AuthStack from './AuthStack/AuthStack';

const Routes = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  if (!isLoggedIn) {
    return <AuthStack />;
  }
  return (
    <View>
      <Text>Logged In</Text>
    </View>
  );
};

export default Routes;

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  bottomTab: {
    position: 'absolute',
    marginBottom: 15,
    marginHorizontal: '30%',
    height: 60,
    shadowColor: '#383838',
    elevation: 10,
    borderRadius: 10,
  },
});
