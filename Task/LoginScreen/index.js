import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Button from '../../src/components/button/CommanButton';
import { Colors } from '../../src/utils/Colors';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'

const LoginScreen = () => {

    const [userName, setUserName] = useState('')
    const navigation = useNavigation();

    return (
        <View style={styles.mainConatiner}>
            <ImageBackground source={require('../Assets/Images/Background.png')} style={styles.bgImag}>

                {/* Header */}
                <View style={styles.headerConatiner}>
                    <TouchableOpacity style={styles.backbtn} onPress={() => navigation.goBack()}>
                        <Image source={require('../Assets/Icons/back.png')} style={{ width: 10, height: 20, alignItems: 'center', justifyContent: 'center', }} />
                    </TouchableOpacity>
                    <Text style={styles.header}>Sign In</Text>
                    <Text>{``}</Text>
                </View>

                <View style={styles.appname}>
                    <Text style={styles.name}>PARTIKARTE</Text>
                </View>

            </ImageBackground>

            <View style={{ marginTop: 10 }}>
                <Text style={styles.welText}>Welcome</Text>
                <Text style={styles.signInText}>{`Sign in with your email \n and password`}</Text>
            </View>

            <View style={styles.inputCon}>

                <View>
                    <Text style={styles.inputText}>Email</Text>
                    <View style={styles.inputView}>
                        <TextInput placeholder={'Enter Your Email'} />
                        <Image source={require('../Assets/Icons/Email.png')} style={{ width: 20, height: 16 }} />
                    </View>
                </View>


                <View>
                    <Text style={styles.inputText}>Password</Text>
                    <View style={styles.inputView}>
                        <TextInput placeholder={'Enter Your Password'} />
                        <Image source={require('../Assets/Icons/lock.png')} style={{ width: 16, height: 21 }} />
                    </View>
                </View>

                {/* <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, borderRadius: 20, borderWidth: 0.3, borderColor: '#3D8AFF', justifyContent: 'space-between' }}>
                    <TextInput placeholder={'Enter Your Password'}></TextInput>
                    <Image source={require('../Assets/Icons/lock.png')} style={{ width: 16, height: 21 }}></Image>
                </View> */}

                <View>

                    <View style={styles.bottomCon}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <Image source={require('../Assets/Icons/box.png')} style={styles.boxImg}></Image>
                            <Text>Remember Me</Text>
                        </View>
                        <TouchableOpacity><Text style={{ color: 'red', textDecorationLine: 'underline' }}>Forget Password</Text></TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.buttonCon} onPress={() => navigation.navigate('ProductDetail')}>
                            <Text style={styles.buttonText}>{'Confrom'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </View>
    )
}

export default LoginScreen;