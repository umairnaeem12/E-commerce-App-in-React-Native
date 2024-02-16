import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BlueButton = ({ text, button, buttontext, onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={button}><Text style={buttontext}>{text}</Text></TouchableOpacity>
        </View>
    )
}

export default BlueButton;

const styles = StyleSheet.create({})