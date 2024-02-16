import { StyleSheet } from 'react-native';
import { Colors } from '../../../utils/Colors';

const styles = StyleSheet.create({
    MianContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    mainImage: {
        flex: 1,
        width: '100%',
        height: '70%',
    },
    mainHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 },
    headerText: { fontWeight: '600', color: Colors.black, fontSize: 17 },
    bottomSheet: { borderTopLeftRadius: 20, borderTopRightRadius: 20, justifyContent: 'flex-end', backgroundColor: 'white', position: 'absolute', bottom: 0, right: 0, left: 0 },
    ProductDetail: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 10 },
    ProductName: { fontSize: 19, fontWeight: '700', color: Colors.black },
    buttons: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#d7dbcc', width: 80, height: 30, borderRadius: 20 },
    addButton: { backgroundColor: 'white', width: 25, height: 25, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 5 },
    totalItems: { textAlign: 'center', alignItems: 'center', marginVertical: 5, fontSize: 15, fontWeight: '700', color: Colors.black },
    reviewsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 },
    reviews: { flexDirection: 'row', alignItems: 'center' },
    raitingText: { color: Colors.black, fontWeight: '700' },
    reviewText: { color: 'grey', fontWeight: '400' },
    DisContainer: { paddingHorizontal: 20, paddingVertical: 15 },
    DisText: { fontSize: 19, fontWeight: '800', color: Colors.black },
    BottomContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 },
    price: { color: Colors.red, fontSize: 25, fontWeight: '800' },
    cartButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.red, paddingHorizontal: 18, paddingVertical: 10, borderRadius: 30 },
    buttonText: { color: Colors.white, marginLeft: 7, fontWeight: '700' }

});

export default styles;