import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainConatiner: { flex: 1 },
    bgImag: { width: '100%', height: 300 },
    headerConatiner: { paddingHorizontal: 20, paddingVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    backbtn: { backgroundColor: 'white', padding: 10, borderRadius: 30, width: 35, height: 35 },
    header: { color: 'white', fontSize: 18, fontWeight: '800' },
    appname: { alignItems: 'center', marginTop: 30 },
    name: { fontSize: 25, color: 'white', fontWeight: '700' },
    welText: { fontSize: 28, fontWeight: '700', color: '#3D8AFF', textAlign: 'center' },
    signInText: { textAlign: 'center', color: '#3D8AFF', marginTop: 10 },
    inputCon: { justifyContent: 'space-around', flex: 1, paddingHorizontal: 20, marginTop: 15 },
    inputText: { position: 'absolute', left: 25, bottom: 41 },
    inputView: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, borderRadius: 20, borderWidth: 0.3, borderColor: '#3D8AFF', justifyContent: 'space-between' },
    bottomCon: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 },
    boxImg: { width: 14, height: 14, marginRight: 5 },
    buttonCon: { backgroundColor: '#3D8AFF', width: 283, height: 50, borderRadius: 30, alignItems: 'center', justifyContent: 'center', marginVertical: 20 },
    buttonText: { fontSize: 15, color: 'white', fontWeight: '700' }

})

export default styles;