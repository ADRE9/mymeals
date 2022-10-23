import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, useTheme} from '@ui-kitten/components';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen/CalendarScreen';

const Tab = createBottomTabNavigator();

const Routes = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Today"
      screenOptions={({route}) => ({
        tabBarStyle: {
          ...styles.bottomTab,
          backgroundColor: theme['color-danger-500'],
          shadowColor: theme['color-danger-400'],
        },
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Today') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          return <Icon style={styles.icon} fill={color} name={iconName} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme['color-primary-100'],
        tabBarInactiveTintColor: theme['color-primary-200'],
      })}>
      <Tab.Screen name="Today" component={HomeScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
    </Tab.Navigator>
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
