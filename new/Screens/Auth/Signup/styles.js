import { StyleSheet } from "react-native";
import { Colors } from "../../../Utils/Colors";

const styles = StyleSheet.create({
    btnstyle: {
        backgroundColor: Colors.blue1,
        width: 327,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        // marginBottom: 16
    },
    txtstyle: {
        color: 'white',
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '600'
    },
    borderbtn: {
        borderWidth: 2,
        width: 327,
        height: 44,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        flexDirection: 'row',
    },
    btnTxt: {
        fontWeight: '700'
    }
});

export default styles;