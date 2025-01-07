import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from '../screens/PostScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import NavigationNames from './NavigationNames';
import MenuScreen from '../screens/MenuScreen';

const Stack = createStackNavigator();

export const HomeStack = ()=>(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={NavigationNames.ScreenName.HomeScreen} component={HomeScreen}/>
    </Stack.Navigator>
)
export const PostStack = ()=>(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='post' component={PostScreen}/>
        <Stack.Screen name='postdetail' component={PostDetailsScreen}/>
    </Stack.Navigator>
)
export const MenuStack = ()=>(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name={NavigationNames.ScreenName.MenuScreen} component={MenuScreen}/>
    </Stack.Navigator>
)