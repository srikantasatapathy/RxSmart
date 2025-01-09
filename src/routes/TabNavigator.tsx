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
        tabBarActiveTintColor: Styles.TabNavigator?.primaryIconColor,
        tabBarInactiveTintColor: Styles.TabNavigator?.secondaryColorIconColor,
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopColor: Styles.TabNavigator?.primaryIconColor,
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
              <Icon name="home" color={Styles.TabNavigator?.activeIconColor} size={20}/>
            );
          },
          tabBarLabel: "Home"
        }}
        name={NavigationNames.TabName.HomeTab}
        component={HomeScreen}
      />
      <Tab.Screen
      options={{
        tabBarIcon: ({ color, size, focused, tintColor }: any) => {
          return (
            <Icon name="calendar" color={Styles.TabNavigator?.activeIconColor} size={20}/>
          );
        },
        tabBarLabel: "Post"
      }}
        name={NavigationNames.TabName.PostTab}
        component={PostStack}
      />
      <Tab.Screen
      options={{
        tabBarIcon: ({ color, size, focused, tintColor }: any) => {
          return (
            <Icon name="menu" color={Styles.TabNavigator?.activeIconColor} size={20}/>
          );
        },
        tabBarLabel: "Menu"
      }}
        name={NavigationNames.TabName.MenuTab}
        component={MenuStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
