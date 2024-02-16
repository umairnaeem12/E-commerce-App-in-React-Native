import React from 'react';
import {  Text, View, TextInput } from 'react-native';
import * as Icon from "react-native-feather";

const TextInputComponent = ({textStyle, mainView, iconStyle, text, placeholder, iconName, strokeColor, onChangeText, value, onBlur}) => {

    const IconComponent = Icon[iconName];

    return (
        <View>
            <Text style={textStyle}>{text}</Text>
            <View style={mainView}>
                {/* <Icon.Lock stroke={'red'} /> */}
                {IconComponent && <IconComponent stroke={strokeColor} style={iconStyle}/>}
                <TextInput placeholder={placeholder} onChangeText={onChangeText} value={value} onBlur={onBlur}></TextInput>
            </View>
        </View>
    )
}

export default TextInputComponent;