import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const SocialMediaButton = ({text, button, buttontext, source}) => {
  return (
    <View style={button}>
      <Image
        source={source}
        style={{width: 18, height: 18, left: 20, resizeMode: 'cover'}}
      />
      <TouchableOpacity>
        <Text style={buttontext}>{text}</Text>
      </TouchableOpacity>
      <Text></Text>
    </View>
  );
};

export default SocialMediaButton;

const styles = StyleSheet.create({});
