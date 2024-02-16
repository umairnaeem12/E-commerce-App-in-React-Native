import React, { useState, useEffect } from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { Colors } from "../../../utils/Colors";
import * as Icon from 'react-native-feather';
import { slider, productData, HomeButtons, categoryData } from '../../../../Task/StaticData';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { FetchData } from '../../../redux/slices/apiSlice';

const MainScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [showCategories, setShowCategories] = useState(false);
  const [selectedButton, setSelectedButton] = useState('Home');

  const userData = useSelector((state) => state.user);
  const userName = useSelector((state) => state.user?.userDetail?.displayName)
  const name = useSelector((state) => state.user?.value) //Data Not come in the name, check later...
  console.log("this is user Data", userName);

  // useEffect(() => {
  //   dispatch(FetchData())
  // }, [])

  // const apiData = useSelector((state) => state.api.data);
  // console.log("This is api data", apiData);

  // const [product, setProduct] = useState([])

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  return (
    <View style={styles.mainContainer}>

      {/* Main Header */}
      <View style={styles.header}>
        <View style={styles.profileImage}>
          <Image source={{ uri: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' }} style={styles.headerImage}></Image>
          <View style={styles.nameContainer}>
            {userName ? (
              <Text>Hello, <Text style={styles.userName}>{userName}!</Text></Text>
            ) : (
             <Text>hello,  <Text style={styles.userName}>{name}</Text></Text>
            )}
            {/* <Text style={{ fontSize: 18, fontWeight: 'bold', color: Colors.black }}>{userName}</Text> */}
            <Text>{`Let's go shopping`}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon.Search stroke={'black'} style={{ marginRight: 10 }} />
          <Icon.Bell stroke={'black'} />
        </View>

      </View>

      {/* Top Home and Category Button */}
      <View>
        <FlatList
          data={HomeButtons}
          horizontal
          contentContainerStyle={{ alignItems: 'center', justifyContent: 'space-between', flex: 1, marginHorizontal: 50, marginBottom: 15 }}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => {
              if (item.name === 'Category') {
                toggleCategories(); // Toggle categories visibility
              } if (item.name === 'Home') {
                setShowCategories(false);
              }

              setSelectedButton(item.name)
            }} style={{ borderColor: selectedButton === item.name ? 'red' : 'transparent', borderBottomWidth: 3 }}>
              <Text style={{ color: Colors.black, fontWeight: '700', fontSize: 19 }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Categories */}
      {showCategories ? (
        <FlatList
          data={categoryData}
          renderItem={({ item }) => (
            <View style={{ alignItems: 'center' }}>
              <ImageBackground source={{ uri: item.image }} style={{ width: 330, height: 100, borderRadius: 10, overflow: 'hidden', marginBottom: 15, justifyContent: 'center', paddingLeft: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: '800', color: Colors.black }}>{item.categort}</Text>
                <Text style={{ fontWeight: '700' }}>{item.product}</Text>
              </ImageBackground>
            </View>
          )}
        />
      ) : (
        <>
          {/* Silder */}
          <Swiper
            activeDotColor={'red'}
            autoplay={true}
            autoplayTimeout={3}
            showsPagination={true}
          >
            {slider.map((item, index) => {
              return (
                <View key={index} style={{ alignItems: 'center' }}>
                  <ImageBackground source={{ uri: item.image }} style={{ width: 325, height: 200, borderRadius: 10, overflow: 'hidden' }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                      <Text style={{ fontSize: 19, fontWeight: '800', color: Colors.black, textAlign: 'center' }}>{item.text}</Text>
                      <Text style={{ fontWeight: '700' }}>{item.discription}</Text>
                    </View>
                  </ImageBackground>
                </View>
              )
            })}
          </Swiper>


          {/* New Arrifals */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.black }}>NewArrifals</Text>
              <Icon.Filter stroke={'red'} />
            </View>
            <TouchableOpacity style={{}}><Text style={{ fontWeight: '800', color: Colors.red }}>See All</Text></TouchableOpacity>
          </View>

          {/* Product List */}
          <View style={{ paddingBottom: 20, flex: 1 }}>
            <FlatList
              data={productData}
              // horizontal
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', flex: 1, paddingVertical: 10 }}
                  onPress={() => {
                    console.log(item)
                    navigation.navigate('ProductDetail', { item })
                  }}
                >
                  <ImageBackground source={{ uri: item.image }} style={{ width: 150, height: 160, borderRadius: 12, overflow: 'hidden' }}>
                    <TouchableOpacity style={{ alignSelf: 'flex-end', backgroundColor: 'red', padding: 10, borderRadius: 30, marginHorizontal: 10, marginVertical: 10 }}>
                      <Icon.Heart stroke={'black'} width={12} height={12} />
                    </TouchableOpacity>
                  </ImageBackground>
                  <View style={{ paddingTop: 5, alignItems: 'center' }}>
                    <Text style={{ fontWeight: '800', fontSize: 18, color: Colors.black, textAlign: 'center' }}>
                      {/* {item.title.split(' ').slice(0, 1).join(' ')} */}
                      {item.name}
                    </Text>
                    <Text>{item.category}</Text>
                    <Text style={{ fontWeight: 'bold' }}>${item.price}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </>
      )}

    </View>
  )
}

export default MainScreen;