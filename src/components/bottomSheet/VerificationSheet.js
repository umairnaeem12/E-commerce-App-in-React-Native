import React, { useRef } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Colors } from "../../utils/Colors";
import Button from '../button/CommanButton';

const BottomSheet = ({ sheetRef }) => {
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
                        height: 370
                    }
                }}
            >
                <View style={styles.RbSheetContainer}>
                    <View style={styles.RbSheetImageContainer}>
                        <Image source={{ uri: 'https://cdn.shopify.com/app-store/listing_images/d762c04f47d0425acbf2989a8977994f/icon/CJH3mtKmk_YCEAE=.png' }} style={styles.verifictionImage}></Image>
                    </View>
                    <View>
                        <Text style={styles.verifictionText}>{`Register Success`}</Text>
                        <Text style={styles.verifictionCode}>{`Congratulation! your account already created. \n Please login to get amazing experience`}</Text>
                    </View>
                    <Button text={'Go to Homepage'} style={styles.button} buttonTextStyle={styles.buttonText} onPress={() => navigation.navigate('CreateAccount')} />
                </View>
            </RBSheet>
        </View>
    )
}

export default BottomSheet;

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.red,
        width: 280,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 12
    },
    buttonText: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: '700'
    },
    RbSheetContainer: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1
    },
    RbSheetImageContainer: {
        backgroundColor: 'red',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 60,
        padding: 10
    },
    verifictionImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    verifictionText: {
        fontSize: 21,
        color: Colors.black,
        fontWeight: '700',
        marginBottom: 10,
        textAlign: 'center'
    },
    verifictionCode: {
        fontSize: 15,
        textAlign: 'center'
    },
});