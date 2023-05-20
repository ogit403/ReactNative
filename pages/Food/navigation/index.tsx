import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNavigation from './Home';
import FavoriteNavigation from './Favorite';
import SeenNavigation from './Seen';
import { COLORS } from '../contains';

const Tab = createBottomTabNavigator();

const NavigationRoot = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    
                    switch(route.name) {
                        case 'Home': {
                            iconName = focused ? 'ios-home' : 'ios-home-outline';
                        } break;
                        case 'Favorite': {
                            iconName = focused ? 'ios-timer' : 'ios-timer-outline';
                        } break;
                        case 'Seen': {
                            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
                        } break;
                        default: break;
                    }
        
                    return <Ionicons name={iconName as string} size={size} color={color} />;
                },
                tabBarActiveTintColor: COLORS.second,
                tabBarInactiveTintColor: COLORS.second,
                tabBarStyle: {
                    backgroundColor: COLORS.primary,
                    height: 65,
                    paddingBottom: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                headerShown: false
            })}
        >
            <Tab.Screen name="Home" component={HomeNavigation} options={{ title: 'Trang chủ' }} />
            <Tab.Screen name="Seen" component={SeenNavigation} options={{ title: 'Đã xem' }} />
            <Tab.Screen name="Favorite" component={FavoriteNavigation} options={{ title: 'Yêu thích' }} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default NavigationRoot