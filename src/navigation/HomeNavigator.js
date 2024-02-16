import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SampleUser from '..';
import MainScreen from '../screens/home/Main';
import CategoryScreen from '../screens/home/Category';
import ProductDetail from '../screens/home/ProductDetail';
import MyCart from '../screens/home/MyCart';
import Payment from '../screens/home/Payment';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='MainScreen' component={MainScreen} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} />
            <Stack.Screen name='MyCart' component={MyCart} />
            <Stack.Screen name='Payment' component={Payment} />
            <Stack.Screen name='CategoryScreen' component={CategoryScreen} />
        </Stack.Navigator>
    )
}

export default HomeNavigator;