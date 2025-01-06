import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from '../screens/PostScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';

const Stack = createStackNavigator();

export const PostStack = ()=>(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='post' component={PostScreen}/>
        <Stack.Screen name='postdetail' component={PostDetailsScreen}/>
    </Stack.Navigator>
)