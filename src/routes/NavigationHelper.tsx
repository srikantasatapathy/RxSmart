import React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather'; // Adjust based on your Icon library
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import NavigationNames from './NavigationNames';

export const tabScreenOptions: (props: {
  route: RouteProp<ParamListBase, keyof ParamListBase>;
  navigation: any;
}) => BottomTabNavigationOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }): React.ReactNode => {
    let iconName: string = '';
    
    switch (route.name) {
      case NavigationNames.TabName.HomeTab:
        iconName = 'home';
        break;
      case NavigationNames.TabName.PostTab:
        iconName = 'calendar';
        break;
      case NavigationNames.TabName.MenuTab:
        iconName = 'menu';
        break;
      default:
        iconName = 'question'; // Default icon if route name doesn't match any case
        break;
    }

    return React.createElement(Icon, { name: iconName, size: 22, color });
  },
});

export const stackScreenOptions: NativeStackNavigationOptions = {
  // headerStyle: {
  //     backgroundColor: ConfigStyles.PRIMARY_COLOR,
  //   },
  //   headerTitleStyle: { color: "red" },
  //   headerBackTitleVisible: true,
};
