import React from 'react';
import { Text, View, TextInput } from 'react-native';
import BlueButton from '../../../Components/Button/BlueButton';
import styles from './styles';
import SocialMediaButton from '../../../Components/Button/SocialMediaButton';
import { Images } from '../../../Assests';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../Components/Common/Header';

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <Header />

      <View style={{ marginBottom: 32 }}>
        <Text> Enter Address</Text>
        <TextInput
          placeholder="Enter your email"
          style={{ borderBottomWidth: 1, borderColor: 'grey' }}
        />
      </View>

      <BlueButton
        onPress={() => navigation.navigate('HomeScreen')}
        button={styles.btnstyle}
        buttontext={styles.txtstyle}
        text={'Create New Account'}
      />

      <View style={{ paddingVertical: 64 }}>
        <Text style={{ textAlign: 'center' }}>
          {` ────────────── or ──────────────`}
        </Text>
      </View>

      <SocialMediaButton
        button={styles.borderbtn}
        buttontext={styles.btnTxt}
        text={'Signup with Phone'}
        source={Images.phone}
      />
      <SocialMediaButton
        button={styles.borderbtn}
        buttontext={styles.btnTxt}
        text={'Signup with Apple ID'}
        source={Images.apple}
      />
      <SocialMediaButton
        button={styles.borderbtn}
        buttontext={styles.btnTxt}
        text={'Signup with Google'}
        source={Images.google}
      />
      <SocialMediaButton
        button={styles.borderbtn}
        buttontext={styles.btnTxt}
        text={'Signup with Facebook'}
        source={Images.facebook}
      />
    </View>
  );
};

export default Signup;
