import React, { useState, useEffect } from 'react';
import { Text, View, ToastAndroid, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';
import Button from '../../../components/button/CommanButton';
import { Colors } from '../../../utils/Colors';
import TextInputComponent from '../../../components/comman/TextInput';
import GoogleAuth from '../../../components/button/GoogleButton';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import ToastProvider from 'react-native-toast-message';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { userData } from '../../../redux/slices/userSlice';
import { Layers } from 'react-native-feather';

const CreateAccount = () => {

    const navigation = useNavigation();
    const dispatach = useDispatch();

    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();

    const [state, setState] = useState();

    const [isLoading, setIsLoading] = useState(false)

    // Create Account with Google

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
            dispatach(userData(userInfo))
            navigation.navigate('Home', { screen: 'MainScreen' });
            setState(userInfo);
        } catch (error) {
            console.log("This is Error", error);
        }
    };


    // Create UserAccount

    const SignIn = () => {
        // Create a user with email and password
        setIsLoading(true)
        auth()
            .createUserWithEmailAndPassword(userEmail, userPassword)
            .then(async (userCredential) => {
                const user = userCredential.user;

                try {
                    // Update user profile with additional information
                    await user.updateProfile({
                        displayName: userName,
                    });

                    // Fetch the updated user data after profile update
                    const updatedUser = auth().currentUser;

                    console.log("User Data", updatedUser);
                    dispatach(userData(updatedUser))
                    navigation.navigate('Home', { screen: 'MainScreen' });
                } catch (updateProfileError) {
                    console.error("Error updating user profile:", updateProfileError);
                }
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                } else if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
        setIsLoading(false)
    }


    // const handleValidation = () => {
    //     if (!userName && !userEmail && !userPassword.trim()) {
    //       // Show toast if TextInput is empty
    //       ToastAndroid.show('Please enter something in TextInput', ToastAndroid.LONG);
    //     }
    // }

    const handleCreateAccount = () => {
        const trimAndCheckEmpty = (value, message) => {
            if (!value || value.trim() === '') {
                ToastAndroid.show(message, ToastAndroid.SHORT);
                return true;
            }
            return false;
        };

        if (
            trimAndCheckEmpty(userName, 'Please Enter Your UserName') ||
            trimAndCheckEmpty(userEmail, 'Please Enter Your Email') ||
            trimAndCheckEmpty(userPassword, 'Please Enter Your Password')
        ) {
            ToastAndroid.show('Please enter something in all fields', ToastAndroid.SHORT);
            return;
        }

        // Continue with account creation logic
        SignIn(); // Assuming SignIn() is a function to create the account
    };

    {/* This is New Taost Message */ }
    const showToast = () => {
        ToastProvider.show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋',
        });
    };

    return (
        <View style={styles.mainContainer}>

            {/* <TouchableOpacity
                onPress={() => showToast('Success!', 'success')}
            ><Text>Show success toast</Text></TouchableOpacity>

            <TouchableOpacity
                onPress={() => showToast('Error!', 'error')}
            ><Text>Show error toast</Text></TouchableOpacity>

            <ToastProvider>
            </ToastProvider> */}

            {/* Create Account Container */}
            <View style={styles.topTextContainer}>
                <Text style={styles.mainText}>Create Account</Text>
                <Text style={styles.mainBottomText}>Start learning with create your account</Text>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flexGrow: 1,
                    backgroundColor: Colors.white,
                    justifyContent: 'space-between'
                }}>

                {/* Enter UserName */}
                <TextInputComponent
                    textStyle={styles.userNameText}
                    mainView={styles.userNameContainer}
                    text={'Username'}
                    placeholder={'Enter your username'}
                    value={userName}
                    onChangeText={setUserName}
                    iconName='User'
                    strokeColor={'red'}
                    iconStyle={{ marginHorizontal: 5 }}
                />

                {/* Enter Email or Phone */}
                <TextInputComponent
                    textStyle={styles.userNameText}
                    mainView={styles.userNameContainer}
                    text={'Email or Phone Number'}
                    value={userEmail}
                    onChangeText={setUserEmail}
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

                {/* Create Account Button */}
                <View style={{ alignItems: 'center' }}>
                    {isLoading ? (
                        <ActivityIndicator size={Layers} />
                    ) : (
                        <Button text={'Create Account'} style={styles.button} buttonTextStyle={styles.buttonText} onPress={() => handleCreateAccount()} />
                    )}
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
                        text={'Sign Up with Google'}
                        buttonStyle={{ flexDirection: 'row', alignItems: 'center', borderColor: Colors.red, width: 280, height: 50, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginVertical: 15, borderWidth: 0.3 }}
                    />
                    <GoogleAuth
                        // iconName={'Facebook'}
                        // strokeColor={'black'}
                        // iconStyle={{ marginHorizontal: 5 }}
                        // source={require('../../../assets/icons/facebook.png')}
                        source={{ uri: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png'}}
                        imageStyle={{ width: 20, height: 20, marginHorizontal: 10 }}
                        buttonTextStyle={[styles.buttonText, { color: Colors.black }]}
                        text={'Sign Up with Phone'}
                        buttonStyle={{ flexDirection: 'row', alignItems: 'center', borderColor: Colors.red, width: 280, height: 50, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginBottom: 20, borderWidth: 0.3 }}
                    />
                </View>

            </ScrollView>

        </View>
    )
}

export default CreateAccount;