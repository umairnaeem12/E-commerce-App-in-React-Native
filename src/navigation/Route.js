import React from 'react';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Route = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Auth" component={AuthNavigator} />
                    {/* <Stack.Screen name="Home" component={HomeNavigator} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default Route;
