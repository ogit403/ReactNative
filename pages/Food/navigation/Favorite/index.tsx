import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Favorite } from '../../screen';
import { COLORS } from '../../contains';

const Stack = createStackNavigator();

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerStyle : {
            backgroundColor : COLORS.primary
            },
            headerTintColor : COLORS.second
        }}
    >
      <Stack.Screen name="FavoriteScreen" component={Favorite} options={{ title: 'Yêu thích' }} />
    </Stack.Navigator>
  )
}

export default FavoriteNavigation