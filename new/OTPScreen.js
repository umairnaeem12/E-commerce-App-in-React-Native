import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

const OTPScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleSendOTP = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setVerificationId(confirmation.verificationId);
    } catch (error) {
      console.log('Error sending OTP:', error);
      // Handle error, such as displaying to the user
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await auth().signInWithCredential(credential);
      console.log('User signed in successfully!');
      // Navigate to the next screen or perform desired actions
    } catch (error) {
      console.log('Error verifying OTP:', error);
      // Handle error, such as displaying to the user
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Enter Phone Number:</Text>
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <Button title="Send OTP" onPress={handleSendOTP} />

      {verificationId !== '' && (
        <View>
          <Text>Enter OTP:</Text>
          <TextInput
            placeholder="OTP"
            value={verificationCode}
            onChangeText={(text) => setVerificationCode(text)}
            keyboardType="numeric"
          />
          <Button title="Verify OTP" onPress={handleVerifyOTP} />
        </View>
      )}
    </View>
  );
};

export default OTPScreen;
