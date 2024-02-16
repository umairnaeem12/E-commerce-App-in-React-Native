import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SampleUser from '..';
import Welcome from '../screens/splash/Welcome';
import Splash from '../screens/splash/Splash';
import CreateAccount from '../screens/auth/CreateAccount';
import OtpVerifiction from '../screens/auth/Verification';
import LoginAccount from '../screens/auth/LoginAccount';
import OnBoardScreen from '../../Task/OnBoardScreen';
import LoginScreen from '../../Task/LoginScreen';
import ProductDetail from '../../Task/ProductDetails';




const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='OnBoardScreen' component={OnBoardScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='ProductDetail' component={ProductDetail} />
            
            {/* <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='CreateAccount' component={CreateAccount} />
            <Stack.Screen name='OtpVerifiction' component={OtpVerifiction} />
            <Stack.Screen name='LoginAccount' component={LoginAccount} /> */}

        </Stack.Navigator>
    )
}

export default AuthNavigator;