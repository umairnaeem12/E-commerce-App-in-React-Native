import { StyleSheet} from 'react-native';
import { Colors } from '../../../Utils/Colors';
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
        justifyContent: 'space-between'

    },
    image: {
        width: 128,
        height: 128,
        tintColor: Colors.blue1
    },
    welcomeTxt: {
        fontSize: 24,
        lineHeight: 26,
        fontWeight: '700'
    },
    contactTxt: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: '400'
    },
    btnstyle: {
        backgroundColor: Colors.blue1,
        width: 327,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginBottom: 16
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
        height: 40,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    }
});

export default styles;