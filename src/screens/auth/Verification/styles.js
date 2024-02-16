import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/Colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 15
    },
    headerText: {
        color: Colors.black,
        fontWeight: '700',
        fontSize: 20
    },
    headerBorders: {
        height: 0.3,
        backgroundColor: 'grey',
        marginBottom: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    verifictionContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        backgroundColor: Colors.grey,
        padding: 15,
        borderRadius: 70,
        marginVertical: 10
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
    verifictionEmail: {
        color: Colors.black,
        fontWeight: '700'
    },
    button: {
        backgroundColor: Colors.red,
        width: 280,
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    buttonText: {
        fontSize: 15,
        color: Colors.white,
        fontWeight: '700'
    },
    submitButtonContainer: {
        alignItems: 'center',
    },
    buttonBottomText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    resendButton: {
        color: Colors.red,
        fontWeight: '700'
    },

    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 51,
        height: 72,
        color: Colors.black,
        borderRadius: 8,
        borderWidth: 1,
        // justifyContent: 'space-between',
        fontSize: 24,
        lineHeight: 30,
        fontWeight: '400',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginLeft: 5
    },
    focusCell: {
        elevation: 10,
        backgroundColor: Colors.offWhite,
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: Colors.red,
        shadowOffset: { width: 3, height: 6 },
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
    }
});

export default styles;