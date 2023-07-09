import { Box, Flex, Heading, Image, Pressable, ScrollView, Text, View } from "native-base";
import React from "react";
import products from "../data/Products";
import Raiting from "./Raiting";
import Colors from "../color";
import BottomNav from "../navigation/BottomNav";
import { useNavigation } from "@react-navigation/native";


// const navigation = useNavigation()
function SearchResults(results) {
    const navigation = useNavigation()
    let data = (results.route.params);
    return (


        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
            <Flex
                flexWrap="wrap"
                direction="row"
                justifyContent="space-between"
                px={6}
            >
                {
                    data.map((result) => (
                        <Pressable
                            onPress={() => navigation.navigate("Single", result)}
                            key={result.idProduct}
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
                                source={{ uri: result.imageProduct_1 }}
                                alt={result.nameProduct}
                                w="full"
                                h={24}
                                resizeMode="contain"
                            />
                            <Box px={4} pt={1}>
                                <Heading
                                    size="sm" bold>{result.priceProduct}đ
                                </Heading>
                                <Text fontSize={10} mt={1} isTruncated w="full">{result.nameProduct}</Text>
                            </Box>
                        </Pressable>
                    ))
                }
            </Flex>

        </ScrollView>

    );

}

export default SearchResults;