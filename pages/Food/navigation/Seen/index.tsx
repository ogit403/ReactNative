import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Seen } from '../../screen';
import { COLORS } from '../../contains';

const Stack = createStackNavigator();

const SeenNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle : {
            backgroundColor : COLORS.primary
            },
            headerTintColor : COLORS.second
        }}
    >
      <Stack.Screen name="SeenScreen" component={Seen} options={{ title: 'Món ăn đã xem' }} />
    </Stack.Navigator>
  )
}

export default SeenNavigation