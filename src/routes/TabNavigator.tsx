import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/HomeScreen';
import { PostStack } from './StackNavigation';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      backBehavior="none"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        popToTopOnBlur: true,
        animation: 'none',
      })}
       initialRouteName='Home'
       >
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'PostTab'} component={PostStack}/>
    </Tab.Navigator>
  );
};

export default TabNavigator;
