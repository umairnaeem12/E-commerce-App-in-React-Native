import React, { useRef, useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, Image, ToastAndroid, ScrollView } from 'react-native';
import styles from './styles';
import Button from '../../../components/button/CommanButton';
import { Colors } from '../../../utils/Colors';
import TextInputComponent from '../../../components/comman/TextInput';
import GoogleAuth from '../../../components/button/GoogleButton';
import ForgetPasswordBottomSheet from '../../../components/bottomSheet/ForgetSheet';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const LoginAccount = () => {

    const sheetRef = useRef();
    const navigation = useNavigation();

    const bottomSheet = () => {
        sheetRef.current.open();
    }

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleLogin = () => {
        if (userEmail.trim() === '' || userPassword.trim() === '') {
            ToastAndroid.show('Input Feild is blank', ToastAndroid.SHORT)
        } else {
            LoginIn();
        }
    }

    useEffect(() => {
        GoogleSignin.configure({
            client_type: '869680970418-eq9uo8p7pg9runvicob7585jv5mn5dvc.apps.googleusercontent.com',
        });
    }, [])

    const GoogleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log("This is user Info", userInfo);
            navigation.navigate('Home', { screen: 'MainScreen' });
            setState(userInfo);
        } catch (error) {
            console.log("This is Error", error);
        }
    };


    const LoginIn = () => {
        auth()
            .signInWithEmailAndPassword(userEmail, userPassword)
            .then(() => {
                console.log('User account Login !');
                navigation.navigate('Home', { screen: 'MainScreen' });
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }

    return (
        <View style={styles.mainContainer}>

            {/* Bottom Sheet on after otp verification */}
            <ForgetPasswordBottomSheet
                sheetRef={sheetRef}
                text={'Sign in With Phone Number'}
                smallText={'Enter your phone number'}
            >
                {/* Different content for this sheet */}
                <TextInputComponent
                    textStyle={styles.userNameText}
                    mainView={styles.userNameContainer}
                    text={'Email or Phone Number'}
                    placeholder={'Enter your email or phone number'}
                    iconName='Mail'
                    strokeColor={'red'}
                // iconStyle={{ marginHorizontal: 20 }}
                />

                <Button text={'Send Code'} style={styles.button} buttonTextStyle={styles.buttonText} onPress={() => navigation.navigate('OtpVerifiction')} />

            </ForgetPasswordBottomSheet>

            {/* Create Account Container */}
            <View style={styles.topTextContainer}>
                <Text style={styles.mainText}>Login Account</Text>
                <Text style={styles.mainBottomText}>Please login with registered account</Text>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                {/* Enter Email or Phone */}
                <TextInputComponent
                    textStyle={styles.userNameText}
                    mainView={styles.userNameContainer}
                    value={userEmail}
                    onChangeText={setUserEmail}
                    text={'Email or Phone Number'}
                    placeholder={'Enter your email or phone number'}
                    iconName='Mail'
                    strokeColor={'red'}
                    iconStyle={{ marginHorizontal: 5 }}
                />

                {/* Enter Password */}
                <TextInputComponent
                    textStyle={styles.userNameText}
                    mainView={styles.userNameContainer}
                    text={'Password'}
                    placeholder={'Create your password'}
                    value={userPassword}
                    onChangeText={setUserPassword}
                    iconName='Lock'
                    strokeColor={'red'}
                    iconStyle={{ marginHorizontal: 5 }}
                />

                <TouchableOpacity style={{ marginBottom: 50 }} onPress={() => bottomSheet()}><Text style={{ textAlign: 'right', color: Colors.red, fontWeight: '700' }}>Forgot Password?</Text></TouchableOpacity>

                {/* Create Account Button */}
                <View style={{ alignItems: 'center' }}>
                    <Button text={'Sign In'} style={styles.button} buttonTextStyle={styles.buttonText} onPress={() => handleLogin()} />
                    <Text>Or using other method</Text>
                </View>

                {/* Sign Up with Google and Facebook */}
                <View style={{ alignItems: 'center' }}>
                    <GoogleAuth
                        // iconName={'Globe'}
                        // strokeColor={'black'}
                        source={require('../../../assets/icons/google.png')}
                        imageStyle={{ width: 20, height: 20, marginHorizontal: 10 }}
                        onPress={() => GoogleSignIn()}
                        // iconStyle={{ marginHorizontal: 5 }}
                        buttonTextStyle={[styles.buttonText, { color: Colors.black }]}
                        text={'Sign In with Google'}
                        buttonStyle={{ flexDirection: 'row', alignItems: 'center', borderColor: Colors.red, width: 280, height: 50, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginVertical: 15, borderWidth: 0.3 }}
                    />
                    <GoogleAuth
                        // iconName={'Facebook'}
                        // strokeColor={'black'}
                        // iconStyle={{ marginHorizontal: 5 }}
                        // source={require('../../../assets/icons/facebook.png')}
                        onPress={() => bottomSheet()}
                        source={{ uri: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png' }}
                        imageStyle={{ width: 20, height: 20, marginHorizontal: 10 }}
                        buttonTextStyle={[styles.buttonText, { color: Colors.black }]}
                        text={'Sign In with Phone'}
                        buttonStyle={{ flexDirection: 'row', alignItems: 'center', borderColor: Colors.red, width: 280, height: 50, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginBottom: 20, borderWidth: 0.3 }}
                    />
                </View>

            </ScrollView>

        </View>
    )
}

export default LoginAccount;