import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductDetail = () => {

  const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../Assets/Images/Image.png')} style={{ width: '100%', height: 350, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, overflow: 'hidden' }}>

                {/* Header Icon */}
                <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, borderRadius: 30, width: 35, height: 35 }} onPress={() => navigation.goBack()}>
                        <Image source={require('../Assets/Icons/back.png')} style={{ width: 10, height: 20, alignItems: 'center', justifyContent: 'center', }} />
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            <View style={{ marginHorizontal: 15, flex: 1}}>
                <Text style={{ fontSize: 18, fontWeight: '700', color: 'black', marginTop: 12 }}>Classic Polyester Surfboard Bag</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../Assets/Icons/alarm.png')} style={{ width: 20, height: 20, marginRight: 2 }}></Image>
                        <Text>0:18Am - 2:20Pm</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../Assets/Icons/calendar.png')} style={{ width: 13, height: 13, marginRight: 2 }}></Image>
                        <Text>21-28 Apr</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../Assets/Icons/eye.png')} style={{ width: 21, height: 14, marginRight: 2 }}></Image>
                        <Text>Melia columan </Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', backgroundColor: 'white', paddingVertical: 20, alignItems: 'center', justifyContent: 'space-evenly', borderRadius: 10, shadowOpacity: 0.9, shadowColor: 'black', shadowRadius: 3, marginTop: 10 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text>5</Text>
                        <Text style={{ marginTop: 5 }}>Total Tickets</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>6</Text>
                        <Text style={{ marginTop: 5 }}>Total Tickets</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text>6</Text>
                        <Text style={{ marginTop: 5 }}>Total Tickets</Text>
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 16, color: 'black' }}>Description</Text>
                    <Text style={{ alignItems: 'center', lineHeight: 18 }}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint, met minim mollinon deserunt ullamcoest sit aliqua dolor. Amet minim mollit non deserunt ullamco est sit aliqua.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint, met minim mollinon deserunt ullamcoest sit aliqua dolor. Amet minim mollit non deserunt ullamco est sit aliqua.</Text>
                    
                    <View style={{  position: 'absolute', right: 0, bottom: 0 }}>
                        <TouchableOpacity style={{ backgroundColor: 'white', padding: 30, borderRadius: 30, width: 35, height: 35, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../Assets/Icons/scan.png')} style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center', }} />
                        </TouchableOpacity>
                  
                    </View>
                </View>

            </View>

        </View>
    )
}

export default ProductDetail;

const styles = StyleSheet.create({})