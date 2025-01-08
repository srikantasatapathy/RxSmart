import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import HomeScreen from '../screens/HomeScreen';
import {MenuStack, PostStack} from './StackNavigation';
import HomeScreen from '../screens/HomeScreen';
import {tabScreenOptions} from './NavigationHelper';
import NavigationNames from './NavigationNames';
import Icon from 'react-native-vector-icons/Feather'; // Adjust based on your Icon library
import getStyles from '../styles/Styles';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const theme = 'light';
  const Styles = getStyles(theme);
  console.log('Styles----',Styles.TabNavigator?.primaryIconColor);
  
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
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
        options={{
          tabBarIcon: ({ color, size, focused, tintColor }: any) => {
            return (
              <Icon name="home" color="#F3C81DFF" size={20}/>
            );
          },
          tabBarLabel: "Home"
        }}
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
