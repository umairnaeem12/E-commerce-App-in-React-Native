import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 20,
            }}>
            <Icon.ArrowLeft
                stroke={'grey'}
                width={20}
                height={20}
                onPress={() => 
                Alert.alert('hi')
                }
            />
            <Text style={{ fontSize: 16, marginLeft: 8 }}>Back</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({});
