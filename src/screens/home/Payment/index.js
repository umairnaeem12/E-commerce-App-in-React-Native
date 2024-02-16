import React, { useRef, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, StyleSheet, Modal, ActivityIndicator } from 'react-native';
import styles from './styles';
import * as Icon from 'react-native-feather';
import { Colors } from '../../../utils/Colors';
import { MyCartProduct } from '../../../utils/StaticData';
import { useRoute } from '@react-navigation/native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import RBSheet from 'react-native-raw-bottom-sheet';
import { useSelector } from 'react-redux';
import { WebView } from 'react-native-webview';

const Payment = () => {

    const BottomSheet = useRef();
    const route = useRoute();
    const totalPrice = route.params.totalPrice;
    const totalItems = useSelector(state => state.cart.totalItems);
    console.log("This is the TotalPrice in Payment", totalPrice);

    const CartData = useSelector((state) => state.cart.items);
    // const CartData = route.params.itemData;
    console.log("This is CarT", CartData);

    const [showGateway, setShowGateway] = useState(false);
    const [prog, setProg] = useState(false);
    const [progClr, setProgClr] = useState('#000');
    function onMessage(e) {
        let data = e.nativeEvent.data;
        setShowGateway(false);
        console.log(data);
        let payment = JSON.parse(data);
        if (payment.status === 'COMPLETED') {
            alert('PAYMENT MADE SUCCESSFULLY!');
        } else {
            alert('PAYMENT FAILED. PLEASE TRY AGAIN.');
        }
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            {showGateway ? (
                <Modal
                    visible={showGateway}
                    onDismiss={() => setShowGateway(false)}
                    onRequestClose={() => setShowGateway(false)}
                    animationType={'fade'}
                    transparent>
                    <View style={styles.webViewCon}>
                        <View style={styles.wbHead}>
                            <TouchableOpacity
                                style={{ padding: 13 }}
                                onPress={() => setShowGateway(false)}>
                                <Icon.X size={24} stroke={'red'} />
                            </TouchableOpacity>
                            <Text
                                style={{
                                    flex: 1,
                                    textAlign: 'center',
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#00457C',
                                }}>
                                PayPal GateWay
                            </Text>
                            <View style={{ padding: 13, opacity: prog ? 1 : 0 }}>
                                <ActivityIndicator size={24} color={progClr} />
                            </View>
                        </View>
                        <WebView
                            source={{ uri: 'https://my-pay-web.web.app/' }}
                            style={{ flex: 1 }}
                            onLoadStart={() => {
                                setProg(true);
                                setProgClr('#000');
                            }}
                            onLoadProgress={() => {
                                setProg(true);
                                setProgClr('#00457C');
                            }}
                            onLoadEnd={() => {
                                setProg(false);
                            }}
                            onLoad={() => {
                                setProg(false);
                            }}
                            onMessage={onMessage}
                        />
                    </View>
                </Modal>
            ) : null}

            {/* This is the bottom sheet */}
            <RBSheet
                ref={BottomSheet}
                closeOnDragDown={true}
                customStyles={{
                    container: {
                        height: 320,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    }
                }}
            >
                <View>

                    <Text style={{ marginBottom: 20, fontSize: 19, color: Colors.black, fontWeight: '800', paddingHorizontal: 20 }}>Payment Method</Text>
                    <View style={{ backgroundColor: 'white', paddingHorizontal: 20, marginBottom: 10 }}>
                        <TouchableOpacity style={{ borderWidth: 0.50, borderRadius: 5, padding: 30 }} onPress={() => BottomSheet.current.open()}><Text style={{ textAlign: 'center' }}>Master Card</Text></TouchableOpacity>
                    </View>

                    <View style={{ backgroundColor: 'white', paddingHorizontal: 20, marginBottom: 10 }}>
                        <TouchableOpacity
                            style={{ borderWidth: 0.50, borderRadius: 5, padding: 30 }}
                            onPress={() => {
                                BottomSheet.current.close();
                                setShowGateway(true)
                            }}>
                            <Text style={{ textAlign: 'center' }}>PayPal</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{ width: '85%', backgroundColor: 'red', padding: 12, borderRadius: 30, alignSelf: 'center', marginBottom: 10 }}><Text style={{ textAlign: 'center', fontSize: 17, color: Colors.white, fontWeight: '700' }}>Confrom Payment</Text></TouchableOpacity>

                </View>
            </RBSheet>

            {/* Top Header */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 20 }}>
                <Icon.ChevronLeft stroke={'black'} />
                <Text style={{ fontWeight: '800', color: Colors.black, fontSize: 17 }}>Payment</Text>
                <Text></Text>
            </View>

            {/* Address */}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <Text style={{ fontWeight: '700', color: Colors.black, fontSize: 17 }}>Address</Text>
                <TouchableOpacity><Text style={{ color: Colors.red, fontWeight: '800' }}>Edit</Text></TouchableOpacity>
            </View>

            {/* Google Map */}
            <View style={{ height: 150, width: 360, }}>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={{ ...StyleSheet.absoluteFillObject, }}
                    showsUserLocation={true}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: 28.579660, longitude: 77.321110 }}
                        title={"JavaTpoint"}
                        description={"Java Training Institute"}
                    />
                </MapView>
            </View>


            {/* Map Address */}
            {/* <View style={{ marginHorizontal: 20, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{ uri: 'https://miro.medium.com/v2/resize:fit:1400/1*CJ4wt-rxmmQj1mzVU-q9yw.png' }} style={{ width: 120, height: 70, borderRadius: 10 }} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ fontWeight: '800', color: Colors.black, fontSize: 18, marginBottom: 5 }}>{`House`}</Text>
                    <Text>{`5482 Adobe Rd #15San \n Diego, California(CA), 92120`}</Text>
                </View>
            </View> */}

            {/* Product Details */}
            <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                <Text style={{ fontWeight: '700', color: Colors.black, fontSize: 17 }}>Products {totalItems}</Text>
            </View>
            <FlatList
                data={CartData}
                renderItem={({ item }) => (
                    <View style={{ paddingHorizontal: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>

                            <Image source={{ uri: item.item.image }} style={{ width: 70, height: 70, borderRadius: 10 }} />
                            <View style={{ paddingHorizontal: 15 }}>
                                <Text style={{ fontSize: 18, color: Colors.black, fontWeight: '700' }}>{item.item.name}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text>Color: <Text style={{ color: Colors.black, fontWeight: '700' }}>{item.item.category}</Text></Text>
                                    <Text style={{ fontSize: 20, color: Colors.black, fontWeight: '700', textAlign: 'right', width: '47%' }}><Text style={{ color: 'red' }}>$</Text>{item.item.price}</Text>
                                </View>
                            </View>

                        </View>

                        <View style={{ height: 0.50, backgroundColor: 'black', marginVertical: 10 }}></View>

                    </View>
                )}
            />

            {/* Payment Card */}
            <View style={{ backgroundColor: 'white', paddingHorizontal: 20 }}>
                <Text style={{ fontWeight: '700', color: Colors.black, fontSize: 17, paddingVertical: 10 }}>Payment Method</Text>
                <TouchableOpacity style={{ borderWidth: 0.50, borderRadius: 5, padding: 30 }} onPress={() => BottomSheet.current.open()}><Text style={{ textAlign: 'center' }}>Select Payment Method</Text></TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }}>
                <Text>Total Amount</Text>
                <Text style={{ fontWeight: '700', fontSize: 18, color: Colors.black }}>${(totalPrice >= 1 ? totalPrice + 10 : totalPrice).toFixed(2)}</Text>
            </View>

            <TouchableOpacity style={{ width: '90%', backgroundColor: 'red', padding: 13, borderRadius: 30, alignSelf: 'center', marginBottom: 10 }}><Text style={{ textAlign: 'center', fontSize: 17, color: Colors.white, fontWeight: '700' }}>Checkout Now</Text></TouchableOpacity>

        </View>
    )
}

export default Payment;