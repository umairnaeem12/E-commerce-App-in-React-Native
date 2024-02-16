import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {

  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('Splash')
  }, 3000)

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={'black'} />
      <Text style={styles.appName}>Kutuku</Text>
      <Text style={styles.shoppingText}>Any shopping just from home</Text>
    </View>
  )
}

export default Welcome;