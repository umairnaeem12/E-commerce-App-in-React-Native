import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import * as Icon from 'react-native-feather';
import { Colors } from '../../../utils/Colors';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addItems, addToCart } from '../../../redux/slices/cartSlice';


const ProductDetail = () => {

    const dispacth = useDispatch();
    const navigation = useNavigation();
    const route = useRoute();
    const productData = route.params;


    return (
        <View style={styles.MianContainer}>
            <ImageBackground source={{ uri: productData.item.image }} style={styles.mainImage}>

                {/* Top Header */}
                <View style={styles.mainHeader}>
                    <Icon.ChevronLeft stroke={'black'} onPress={() => navigation.goBack()} />
                    <Text style={styles.headerText}>Detial Prodcut</Text>
                    <Icon.ShoppingBag stroke={'black'} />
                </View>

                {/* Bottom Sheet */}
                <View style={styles.bottomSheet}>

                    {/* Product Detail */}
                    <View style={styles.ProductDetail}>
                        <Text style={{ fontWeight: '800', fontSize: 18, color: Colors.black, textAlign: 'center' }}>
                            {/* {productData.item.title.split(' ').slice(0, 1).join(' ')} */}
                            {productData.item.name}
                        </Text>
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.addButton}><Text>-</Text></TouchableOpacity>
                            <Text style={styles.totalItems}>{`0`}</Text>
                            <TouchableOpacity style={[styles.addButton, { marginLeft: 0, marginRight: 5 }]}><Text>+</Text></TouchableOpacity>
                        </View>
                    </View>

                    {/* Product Reviews */}
                    <View style={styles.reviewsContainer}>
                        <View style={styles.reviews}>
                            <Icon.Star stroke={'#ff5900'} fill={'#ff5900'} width={15} height={15} />
                            <Text style={styles.raitingText}>{`4.8`}<Text style={styles.reviewText}>{`(320 Reviews)`}</Text></Text>
                        </View>
                        <Text style={{ color: Colors.black }}>Avaialble in Stoke</Text>
                    </View>

                    {/* Product Discription */}
                    <View style={styles.DisContainer}>
                        <Text style={styles.DisText}>Description</Text>
                        <Text style={{ marginTop: 5 }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,`}</Text>
                    </View>

                    {/* Price && AddToCart Button */}
                    <View style={styles.BottomContainer}>
                        <Text style={styles.price}>{`$`}
                            <Text style={{ fontSize: 25, fontWeight: '800', color: Colors.black }}>{productData.item.price}</Text>
                        </Text>
                        <TouchableOpacity style={styles.cartButton} onPress={() => {
                            console.log("This is Product Data", productData);
                            dispacth(addItems(productData))
                            navigation.navigate('MyCart')
                        }}>
                            <Icon.ShoppingBag stroke={'white'} />
                            <Text style={styles.buttonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

export default ProductDetail;