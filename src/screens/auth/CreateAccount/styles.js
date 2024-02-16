import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/Colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
        justifyContent: 'space-between'
    },
    topTextContainer: {
        paddingVertical: 20
    },
    mainText: {
        fontSize: 23,
        fontWeight: '900',
        color: Colors.black,
        paddingVertical: 3
    },
    mainBottomText: {
        fontWeight: '600'
    },
    userNameText: {
        fontSize: 20,
        color: Colors.black,
        fontWeight: '700',
        marginBottom: 10
    },
    userNameContainer: {
        // backgroundColor: Colors.red,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 8,
        borderWidth: 0.3,
        borderColor: Colors.red
    },
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

});

export default styles;