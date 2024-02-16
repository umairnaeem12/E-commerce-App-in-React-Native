import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/Colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderImage: {
        width: 330,
        height: 330,
        borderRadius: 30,
    },
    slide: {
        // flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.black,
        textAlign: 'center',
        paddingVertical: 15
    },
    discription: {
        textAlign: 'center'
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
    createAccount: {
        textAlign: 'center',
        color: Colors.red,
        fontWeight: '700',
        marginBottom: 20
    }
});

export default styles;