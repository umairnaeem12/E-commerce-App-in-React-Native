import React from 'react';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import { SplashSlider } from '../../../../Task/StaticData';
import Button from '../../../components/button/CommanButton';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Swiper
        activeDotColor='red'
        autoplay={true}
        autoplayTimeout={3}
        showsPagination={false}
      >
        {SplashSlider.map((item, index) => {
          return (
            <View key={index} style={styles.slide}>
              <Image source={{ uri: item.image }} style={styles.sliderImage}></Image>
              <Text style={styles.text}>{item.text}</Text>
              <Text style={styles.discription}>{item.discription}</Text>
            </View>
          )
        })}
      </Swiper>
      <View>
        <Button text={'Create Account'} style={styles.button} buttonTextStyle={styles.buttonText} onPress={() => navigation.navigate('CreateAccount')} />
        <TouchableOpacity onPress={() =>  navigation.navigate('LoginAccount')}><Text style={styles.createAccount}>{`Already Have an Account?`}</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Splash;