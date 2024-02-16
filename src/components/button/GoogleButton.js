import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import * as Icon from 'react-native-feather';

const GoogleAuth = ({ iconName, strokeColor, buttonStyle, buttonTextStyle, text, iconStyle, onPress, source, imageStyle, children }) => {

    const IconComponent = Icon[iconName]

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            {/* <IconComponent stroke={strokeColor} style={iconStyle} /> */}
            <Image source={source} style={imageStyle} />
            <Text style={buttonTextStyle}>{text}</Text>
            {children}
        </TouchableOpacity>
    )
}

export default GoogleAuth;