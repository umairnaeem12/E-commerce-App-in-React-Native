import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper';
import { SplashSlider } from '../StaticData';
import { useNavigation } from '@react-navigation/native';

const OnBoardScreen = () => {

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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>{'Next'}</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  )
}

export default OnBoardScreen;