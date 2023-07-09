import React, { useState } from "react";
import { HStack, Box, Input, Button } from "native-base";
import Colors from "../color";
import { Pressable } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { _Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CalllURL from "../CalllURL";
import SearchResults from "./SearchResults";
function HomeSearch() {
    const [nameProduct, setnameProduct] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const navigation = useNavigation();

    const handleSearch = () => {
        // Gửi yêu cầu tìm kiếm đến API PHP với searchText
        fetch(`${CalllURL.URL_searchProduct}?key=${nameProduct}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.length !== 0)
                    navigation.navigate("SearchResults", result);
                // Xử lý kết quả tìm kiếm
                setSearchResults(searchResults);
                // Thực hiện chuyển hướng đến trang kết quả tìm kiếm
                // navigation.navigate(, { results: result });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <HStack
            space={3}
            w="full"
            px={6}
            bg={Colors.main}
            py={4}
            alignItems="center"
            safeAreaTop
        >
            <Input
                placeholder="Nike, Puma, Adidas ..."
                w="85%"
                bg={Colors.white}
                type="search"
                h={12}
                borderWidth={0}
                variant="filled"
                _focus={{
                    bg: Colors.white,
                }}
                onChangeText={(text) => setnameProduct(text)}
            />

            <Button onPress={handleSearch}>
                <AntDesign name="search1" size={24} color="black" />
            </Button>
            <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
                <FontAwesome name="shopping-basket" size={24} color={Colors.white} />
                <Box
                    px={1}
                    rounded="full"
                    position="absolute"
                    top={-13}
                    left={2}
                    bg={Colors.red}
                    _text={{
                        color: Colors.white,
                        fontSize: "11px",
                    }}
                >

                </Box>
            </Pressable>
        </HStack>
    );
}

export default HomeSearch;
