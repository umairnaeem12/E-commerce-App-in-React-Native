import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import BlueButton from '../../../Components/Button/BlueButton';
import SocialMediaButton from '../../../Components/Button/SocialMediaButton';
import { useNavigation } from '@react-navigation/native';
import { Images } from '../../../Assests';

const Welcome = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.conatiner}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <Image
                    source={require('../../../Assests/Images/Image.png')}
                    style={styles.image}
                />
                <Text style={styles.welcomeTxt}>Welcome to LempMe</Text>
                <Text style={styles.contactTxt}>Contacts - simple & secure</Text>
            </View>

            <View>
                <BlueButton
                    onPress={() => navigation.navigate('Signup')}
                    button={styles.btnstyle}
                    buttontext={styles.txtstyle}
                    text={'Create New Account'}
                />
                <SocialMediaButton
                    button={styles.borderbtn}
                    text={'Login'}
                    source={Images}
                />
            </View>
        </View>
    );
};

export default Welcome;
