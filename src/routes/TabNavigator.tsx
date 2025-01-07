import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/HomeScreen';
import {MenuStack, PostStack} from './StackNavigation';
import HomeScreen from '../screens/HomeScreen';
import {tabScreenOptions} from './NavigationHelper';
import NavigationNames from './NavigationNames';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        ...tabScreenOptions({route}),
        tabBarActiveTintColor: '#FFAE36',
        tabBarInactiveTintColor: '#f3d9c9',
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopColor: '#FFAE36',
          height: 60,
          paddingTop: 7,
        },
        headerShown: false,
        animation: 'shift',
      })}
      initialRouteName={NavigationNames.TabName.HomeTab}>
      <Tab.Screen
        name={NavigationNames.TabName.HomeTab}
        component={HomeScreen}
      />
      <Tab.Screen
        name={NavigationNames.TabName.PostTab}
        component={PostStack}
      />
      <Tab.Screen
        name={NavigationNames.TabName.MenuTab}
        component={MenuStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
