import { Box, HStack, Heading, CheckIcon, Image, ScrollView, Spacer, Text, Select } from "native-base";
import React, { useState, useEffect } from 'react'
import Colors from "../color";
import Raiting from "../components/Raiting";
import Buttone from "../components/Buttone";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CalllURL from "../CalllURL";
import CartItems from "../components/CartItems";

function SingleProductScreen({ route }) {
    const [products, setProducts] = useState([])
    // useEffect(() => {
    //     fetch(CalllURL.URL_getProductDetail)
    //         .then((reponses) => reponses.json())
    //         .then((data) => {
    //             setProducts(data)
    //         })
    //         .catch((error) => {
    //             console.log("Error", error);
    //         })
    // }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(CalllURL.URL_getProductDetail);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log("Error", error);
            }
        };
        fetchData();
    }, []);


    const [size, setSize] = useState(0)
    const navigation = useNavigation()
    const product = route.params;
    const handleSetsize = (e) => {
        setSize(e)
    }
    const handleAddToCart = async () => {
        try {
            console.log(product);
            let idUser = await AsyncStorage.getItem('idUser')
            let data = {
                idProduct: product.idProduct,
                sizeProduct: size,
                idUser: idUser
            };
            console.log(data)
            fetch(CalllURL.URL_setCart, {
                method: 'POST',
                body: JSON.stringify(data),
            }).then(response => response.json())
                .then(data => {
                    // Handle the response from the PHP backend
                    console.log(data);
                })
                .catch(error => {
                    console.error("Error:", error);
                });

        } catch (error) {
            console.log("Error", error)
        }

    };

    return (
        <Box safeArea flex={1} bg={Colors.white}>
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image
                    source={{ uri: product.imageProduct_1 }}
                    alt="Image"
                    w="full"
                    h={300}
                    resizeMode="contain"
                />
                <Heading bold fontSize={15} isTruncated mb={2} lineHeight={22}>
                    {product.nameProduct}
                </Heading>
                <Raiting value={product.rating} text={product.viewProduct} />
                <HStack space={2} alignItems="center" my={5}>
                    <Spacer />
                    <Heading bold color={Colors.black} fontSize={19}>
                        ${product.priceProduct}đ
                    </Heading>
                </HStack>
                <HStack space={2} alignItems="center" my={5}>
                    <Text>Vui lòng chọn size</Text>
                    <Select minWidth="200" accessibilityLabel="size" placeholder="SIZE" _selectedItem={{
                        endIcon: <CheckIcon size="5" />
                    }} onValueChange={handleSetsize}>
                        <Select.Item label="36" value="36" />
                        <Select.Item label="37" value="37" />
                        <Select.Item label="38" value="38" />
                        <Select.Item label="39" value="39" />
                        <Select.Item label="40" value="40" />
                        <Select.Item label="41" value="41" />
                        <Select.Item label="42" value="42" />
                        <Select.Item label="43" value="43" />
                        <Select.Item label="44" value="44" />
                    </Select>

                </HStack>
                <Text lineHeight={24} fontSize={12}>
                    {product.descriptionProduct}
                </Text>
                <Buttone
                    onPress={handleAddToCart}
                    bg={Colors.main}
                    color={Colors.white}
                    mt={10}
                >
                    ADD TO CART
                </Buttone>
            </ScrollView>
        </Box>
    );
}

export default SingleProductScreen;
