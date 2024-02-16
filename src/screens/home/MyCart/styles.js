import { StyleSheet} from 'react-native';
import { Colors } from '../../../utils/Colors';

const styles = StyleSheet.create({
    mainHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 },
    headerText: { fontWeight: '600', color: Colors.black, fontSize: 17 },
    addButton: { backgroundColor: 'white', width: 25, height: 25, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 5 },
    totalItems: { textAlign: 'center', alignItems: 'center', marginVertical: 5, fontSize: 15, fontWeight: '700', color: Colors.black },
});

export default styles;