import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Button = ({text, style, onPress, buttonTextStyle}) => {
  return (
      <TouchableOpacity style={style} onPress={onPress}>
        <Text style={buttonTextStyle}>{text}</Text>
      </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({})