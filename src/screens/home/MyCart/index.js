import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { MyCartProduct } from '../../../utils/StaticData';
import { Colors } from '../../../utils/Colors';
import * as Icon from 'react-native-feather';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../../redux/slices/cartSlice';

const MyCart = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    const route = useRoute();
    const cartItems = useSelector((state) => state.cart.items);
    const totalItems = useSelector(state => state.cart.totalItems);
    console.log("This is my cart redux api data", totalItems);

    const totalPrice = useMemo(() =>
        cartItems.reduce((acc, cartItem) => acc + parseFloat(cartItem.item.price), 0),
        [cartItems]
    );

    // const [itemData, setItemData] = useState([route.params.productData]);
    // console.log(itemData);

    return (
        <View style={{ flex: 1 }}>

            {/* Top Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15 }}>
                <Icon.ChevronLeft stroke={'black'} />
                <Text style={{ fontWeight: '600', color: Colors.black, fontSize: 17 }}>My cart</Text>
                <View style={{}}>
                    <Text style={{alignSelf: 'flex-end', bottom: 15, left: 10, backgroundColor: '#bab356', width: 20, height: 20, borderRadius: 30, textAlign: 'center', color: Colors.white, fontWeight: '700'}}>{totalItems}</Text>
                    <Icon.ShoppingBag stroke={Colors.darkgray} style={{position: 'absolute'}} />
                </View>
            </View>

            <FlatList
                data={cartItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <View style={{ flexDirection: 'row', marginVertical: 10, alignItems: 'center', flex: 1, marginHorizontal: 10 }}>
                            <Image source={{ uri: item.item.image }} style={{ width: 70, height: 70, borderRadius: 10 }} />
                            <View style={{ paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                                <View>
                                    <Text style={{ fontWeight: '800', fontSize: 18, color: Colors.black }}>{item.item.name}</Text>
                                    <Text><Text style={{ color: Colors.black, fontWeight: '700' }}>{item.item.category}</Text></Text>
                                </View>
                                <View style={{}}>
                                    <Icon.X stroke={'red'} style={{ alignSelf: 'flex-end', bottom: 10 }} width={17} height={17} onPress={() => dispatch(removeFromCart(item.id))} />
                                    <Text style={{ fontSize: 20, color: Colors.black, fontWeight: '700' }}><Text style={{ color: 'red' }}>$</Text>{item.item.price}</Text>
                                </View>
                            </View>

                        </View>

                        <View style={{ height: 0.50, backgroundColor: 'black', marginVertical: 10 }}></View>

                    </View>
                )}
            />

            <View style={{ justifyContent: 'flex-end', paddingBottom: 10, backgroundColor: '#bab356', height: 220, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 16 }}>Sub Total</Text>
                    {/* <Text style={{ color: 'black', fontSize: 17, fontWeight: '800' }}>${route.params.productData.item.price}</Text> */}
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: '800' }}>${totalPrice.toFixed(2)}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 16 }}>Shipping</Text>
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: '800' }}>{`$10.00`}</Text>
                </View>

                <View style={{ borderBottomWidth: 0.50, borderStyle: 'dashed', paddingTop: 10 }}></View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5, paddingHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 16 }}>Total Amount</Text>
                    <Text style={{ color: 'black', fontSize: 17, fontWeight: '800' }}>${(totalPrice >= 1 ? totalPrice + 10 : totalPrice).toFixed(2)}</Text>
                </View>

                <TouchableOpacity style={{ backgroundColor: 'red', width: '80%', height: '22%', borderRadius: 30, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 20 }} onPress={() => navigation.navigate('Payment', { totalPrice })}><Text style={{ fontSize: 18, color: Colors.white, fontWeight: '800' }}>Checkout</Text></TouchableOpacity>
                {/* <TouchableOpacity style={{ backgroundColor: 'red', width: '80%', height: '22%', borderRadius: 30, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 20 }} onPress={() => navigation.navigate('Payment')}><Text style={{ fontSize: 18, color: Colors.white, fontWeight: '800' }}>Checkout</Text></TouchableOpacity> */}

            </View>

        </View>
    )
}

export default MyCart;