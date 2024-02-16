import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItems, addToCart, emptyCard, removeFromCart } from './redux/slices/cartSlice';
import { FetchData } from './redux/slices/apiSlice';

const SampleUser = () => {

    const dispatch = useDispatch();

    const userData = useSelector((state) => state.cart);
    // console.log('This is UserData', userData.items);
    // console.log("This is userItems", userData.totalItems);

    const ApiData = useSelector((state) => state.api);
    console.log("This is the Api Data", ApiData)

    const data = [
        {
            id: 1,
            name: 'Ali',
            userToken: '123'
        },
        {
            id: 2,
            name: 'Ahamd',
            userToken: '12345'
        },
        {
            id: 3,
            name: 'Nomaan',
            userToken: '12345678'
        },
    ];

    return (
        <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>

            <Text>This is the Redux ToolKit</Text>

            <Button title='Add Data' onPress={() => dispatch(addItems(data))}/>

            <Button title='Add TO Cart' onPress={() => dispatch(addToCart())}/>

            <Button title='Remove From Cart' onPress={() => dispatch(removeFromCart())}/>

            <Button title='Empty Cart' onPress={() => dispatch(emptyCard())}/>

            <Button title='Fetch Api' onPress={() => dispatch(FetchData())}/>

        </View>
    );
};

export default SampleUser;
