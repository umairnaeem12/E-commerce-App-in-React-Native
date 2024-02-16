import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const BottomTabNavigation = () => {
  
  const [selectedItem, setSelectedItem] = useState(null);
  const navigation = useNavigation();

  const Data = [
    { id: 1, screen: 'Home', icon: require('../assets/icons/home.png'), screen: 'Home' },
    { id: 2, screen: 'Category', icon: require('../assets/icons/home.png'), screen: 'Product' },
    { id: 3, screen: 'Fav', icon: require('../assets/icons/Heart.png'), screen: 'Cart' },
    { id: 4, screen: 'More', icon: require('../assets/icons/home.png'), screen: '' },
  ];

  const handlePress = (item) => {
    setSelectedItem(item.id === selectedItem?.id ? null : item);
    navigation.navigate(item.screen)
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          horizontal
          contentContainerStyle={styles.itemList}
          data={Data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.itemContainer,
                selectedItem?.id === item.id && styles.selectedItem,
              ]}
              onPress={() => handlePress(item)}
            >
              <Image
                source={item.icon}
                style={[
                  styles.bottomBarImage,
                  selectedItem?.id === item.id && { tintColor: 'yellow' },
                ]}
              />
              {!selectedItem || selectedItem.id !== item.id ? (
                <Text>{item.screen}</Text>
              ) : null}
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: width,
    backgroundColor: 'white', // Background color of the bottom bar
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    borderColor: '#ccc',
  },
  selectedItem: {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 30
  },
  bottomBarImage: {
    width: 24,
    height: 24,
    tintColor: 'gray',
  },
});

export default BottomTabNavigation;
