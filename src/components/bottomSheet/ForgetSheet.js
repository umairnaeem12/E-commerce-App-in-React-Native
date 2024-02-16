import React, { useRef } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ForgetPassword = ({ sheetRef, text, smallText, children }) => {
    return (
        <View>
            <RBSheet
                ref={sheetRef}
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
                        height: 280
                    }
                }}>
                <View style={{ flex: 1, justifyContent: 'space-around', alignSelf: 'center' }}>
                    <View style={{}}>
                        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>{text}</Text>
                        <Text style={{}}>{smallText}</Text>
                    </View>
                    {children}
                </View>
            </RBSheet>
        </View>
    )
}

export default ForgetPassword;

const styles = StyleSheet.create({

})