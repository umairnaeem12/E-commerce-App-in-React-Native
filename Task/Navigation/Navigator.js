import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import OnBoardScreen from '../../Task/OnBoardScreen';
import LoginScreen from '../../Task/LoginScreen';
import ProductDetail from '../../Task/ProductDetails';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='OnBoardScreen' component={OnBoardScreen} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='ProductDetail' component={ProductDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;