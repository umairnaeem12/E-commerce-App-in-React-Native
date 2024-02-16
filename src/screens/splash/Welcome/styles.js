import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/Colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.red
    },
    appName: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.white,
        margin: 5
    },
    shoppingText: {
        fontWeight: '700',
        color: Colors.white,
        fontSize: 15
    }
});

export default styles;