import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Category, Home, Product } from '../../screen';
import { COLORS } from '../../contains';

const Stack = createStackNavigator();


const HomeNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle : {
            backgroundColor : COLORS.primary
            },
            headerTintColor : COLORS.second
        }}
    >
      <Stack.Screen name="HomeScreen" component={Product} options={{ title: 'Món ăn ngon' }} />
      <Stack.Screen name="CategoryScreen" component={Category} />
      <Stack.Screen name="ProductScreen" component={Product} />
    </Stack.Navigator>
  )
}

export default HomeNavigation