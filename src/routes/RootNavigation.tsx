import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'

const RootNavigation = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default RootNavigation