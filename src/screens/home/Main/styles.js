import { StyleSheet } from "react-native";
import { Colors } from "../../../utils/Colors";

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.white
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    profileImage: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerImage: {
        width: 40,
        height: 40,
        borderRadius: 30
    },
    nameContainer: {
        paddingLeft: 5
    },
    userName: {
        fontSize: 17,
        fontWeight: 'bold',
        color: Colors.black
    }
});

export default styles;