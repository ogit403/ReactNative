import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Favorite } from '../../screen';
import { COLORS } from '../../contains';
import { TrashAll } from '../../components';
import useActionProduct from '../../hooks/useActionProduct';
import { ProductType } from '../../interfaces';

export type RootStackParamListFavorite = {
  FavoriteScreen: undefined;
  ProductScreen: { product: ProductType, name: string };
};

const Stack = createStackNavigator<RootStackParamListFavorite>();

const FavoriteNavigation = () => {
  const { favorite } = useActionProduct('');

  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle : {
            backgroundColor : COLORS.primary
            },
            headerTintColor : COLORS.second
        }}
    >
      <Stack.Screen name="FavoriteScreen" component={Favorite} options={{ title: 'Yêu thích', headerRight: () => <TrashAll data={favorite} type="favorite" /> }} />
    </Stack.Navigator>
  )
}

export default FavoriteNavigation