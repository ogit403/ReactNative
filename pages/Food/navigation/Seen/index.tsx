import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Seen } from '../../screen';
import { COLORS } from '../../contains';
import { TrashAll } from '../../components';
import useActionProduct from '../../hooks/useActionProduct';
import { ProductType } from '../../interfaces';

export type RootStackParamListSeen = {
  SeenScreen: undefined;
  ProductScreen: { product: ProductType, name: string };
};

const Stack = createStackNavigator<RootStackParamListSeen>();

const SeenNavigation = () => {
  const { view } = useActionProduct('');

  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle : {
            backgroundColor : COLORS.primary
            },
            headerTintColor : COLORS.second
        }}
    >
      <Stack.Screen name="SeenScreen" component={Seen} options={{ title: 'Món ăn đã xem', headerRight: () => <TrashAll data={view} type="seen" /> }} />
    </Stack.Navigator>
  )
}

export default SeenNavigation