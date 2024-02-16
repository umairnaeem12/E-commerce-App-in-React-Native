import React, { useState, useRef } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import * as Icon from 'react-native-feather';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../utils/Colors';
import Button from '../../../components/button/CommanButton';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from '../../../components/bottomSheet/VerificationSheet';

const OtpVerifiction = () => {

  const CELL_COUNT = 6;

  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const navigation = useNavigation();

  // const refRbSheet = useRef();

  const RbSheet = useRef();

  const OpenSheet = () => {
    RbSheet.current.open();
  }

  return (
    <View behavior="padding" style={styles.mainContainer}>

      {/* Bottom Sheet on after otp verification */}
      {/* <RBSheet
        ref={refRbSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          draggableIcon: {
            backgroundColor: Colors.red,
            width: 40
          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 370
          }
        }}
      >
        <View style={styles.RbSheetContainer}>
          <View style={styles.RbSheetImageContainer}>
            <Image source={{ uri: 'https://cdn.shopify.com/app-store/listing_images/d762c04f47d0425acbf2989a8977994f/icon/CJH3mtKmk_YCEAE=.png' }} style={styles.verifictionImage}></Image>
          </View>
          <View>
            <Text style={styles.verifictionText}>{`Register Success`}</Text>
            <Text style={styles.verifictionCode}>{`Congratulation! your account already created. \n Please login to get amazing experience`}</Text>
          </View>
          <Button text={'Go to Homepage'} style={styles.button} buttonTextStyle={styles.buttonText} onPress={() => navigation.navigate('CreateAccount')} />
        </View>
      </RBSheet> */}

      <BottomSheet sheetRef={RbSheet}/>

      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft stroke={'black'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{`OTP Verification`}</Text>
        <Text>{``}</Text>
      </View>

      {/* Border After Header */}
      <View style={styles.headerBorders}></View>

      <View style={styles.container}>
        <ScrollView contentContainerStyle={{}} scrollEnabled showsVerticalScrollIndicator={false}>

          <View style={styles.verifictionContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: 'https://cdn.shopify.com/app-store/listing_images/d762c04f47d0425acbf2989a8977994f/icon/CJH3mtKmk_YCEAE=.png' }} style={styles.verifictionImage}></Image>
            </View>
            <Text style={styles.verifictionText}>{`Verification Code`}</Text>
            <Text style={styles.verifictionCode}>{`We have to send the code verifiction to`}</Text>
            <Text style={styles.verifictionEmail}>{`+923082305619`}</Text>
          </View>

          {/* Otp Fields */}
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[
                  styles.cell,
                  { borderColor: error ? Colors.lightRed : Colors.cgreen },
                  isFocused && styles.focusCell,
                ]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          {error ? <Text style={styles.warnTxt}>{'Wrong code, please try again'}</Text> : null}

          {/* Submit Button */}
          <View style={styles.submitButtonContainer}>
            <Button text={'Submit'} style={styles.button} buttonTextStyle={styles.buttonText} onPress={() => OpenSheet()} />
            <View style={styles.buttonBottomText}>
              <Text>Didn't reveice the code?</Text>
              <TouchableOpacity><Text style={styles.resendButton}> Resend</Text></TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </View>

    </View>
  )
}

export default OtpVerifiction;