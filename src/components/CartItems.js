import { Box, Pressable, HStack, Center, Image, VStack, Text, Button, View } from "native-base";
import React, { useState, useEffect } from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import products from "../data/Products";
import Colors from "../color";
import { FontAwesome } from "@expo/vector-icons";
import CalllURL from "../CalllURL";
import { useNavigation } from "@react-navigation/native";


function CartItems() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(CalllURL.URL_getCart)
            .then((reponses) => reponses.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log("Error", error);
            });
    }, []);
    const navigation = useNavigation()
    return (
        <View>
            {products.map((test) => (
                <View key={test.idProduct}>
                    <Image
                        source={{ uri: test.imageProduct_1 }}
                        alt={test.nameProduct}
                        style={{ width: 100, height: 100 }}
                        accessibilityLabel={test.nameProduct} // Use name as accessibility label
                    />
                    <Text>{test.nameProduct}</Text>
                    <Text>{test.priceProduct}</Text>
                    <Text>{test.sizeProduct}</Text>

                </View>
            ))}
        </View>
    )
}
export default CartItems;