import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native';
import { Colors } from '../../../utils/Colors';
import { categoryData } from '../../../../Task/StaticData';

const CategoryScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.white, alignItems: 'center' }}>
            <FlatList
                data={categoryData}
                renderItem={({ item }) => (
                    <View>
                        <ImageBackground source={{ uri: item.image }} style={{ width: 350, height: 100, borderRadius: 10, overflow: 'hidden', marginBottom: 15, justifyContent: 'center', paddingLeft: 20 }}>
                            <Text style={{fontSize: 20, fontWeight: '800', color: Colors.black}}>{item.categort}</Text>
                            <Text style={{fontWeight: '700'}}>{item.product}</Text>
                        </ImageBackground>
                    </View>
                )}
            />
        </View>
    )
}

export default CategoryScreen;