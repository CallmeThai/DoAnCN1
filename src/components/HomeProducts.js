import React, { useEffect, useState } from "react";
import { Flex, ScrollView, Text, Pressable, Image, Box, Heading } from "native-base";
import products from "../data/Products";
import Colors from "../color";
import Raiting from "./Raiting";
import { useNavigation } from "@react-navigation/native";
import CalllURL from "../CalllURL";
function HomeProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(CalllURL.URL_getProduct)
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
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <Flex
                flexWrap="wrap"
                direction="row"
                justifyContent="space-between"
                px={6}
            >
                {
                    products.map((product) => (
                        <Pressable
                            onPress={() => navigation.navigate("Single", product)}
                            key={product.idProduct}
                            w="47%"
                            bg={Colors.white}
                            rounded="md"
                            shadow={2}
                            pt={0.3}
                            my={3}
                            pb={2}
                            overflow="hidden"
                        >
                            <Image
                                source={{ uri: product.imageProduct_1 }}
                                alt={product.nameProduct}
                                w="full"
                                h={24}
                                resizeMode="contain"
                            />
                            <Box px={4} pt={1}>
                                <Heading
                                    size="sm" bold>{product.priceProduct}đ
                                </Heading>
                                <Text fontSize={10} mt={1} isTruncated w="full">{product.nameProduct}</Text>
                                <Raiting value={product.rating} />
                            </Box>
                        </Pressable>
                    ))
                }
            </Flex>
        </ScrollView>
    );
}
export default HomeProducts