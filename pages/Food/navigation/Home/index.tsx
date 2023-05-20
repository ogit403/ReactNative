import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Category, Home, Product } from '../../screen';
import { COLORS } from '../../contains';
import { ProductType } from '../../interfaces';

export type RootStackParamList = {
    HomeScreen: undefined;
    CategoryScreen: { id: string, name: string };
    ProductScreen: { product: ProductType, name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

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
      <Stack.Screen name="HomeScreen" component={Home} options={{ title: 'Món ăn ngon' }} />
      <Stack.Screen name="CategoryScreen" component={Category} options={({ route }) => ({
        title: route.params.name
      })} />
      <Stack.Screen name="ProductScreen" component={Product} options={({ route }) => ({
        title: route.params.name
      })} />
    </Stack.Navigator>
  )
}

export default HomeNavigation