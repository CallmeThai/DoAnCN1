import { View, Text } from "react-native";
import React from 'react'
import { Box } from "native-base";
import Colors from "../color";
import HomeSearch from "../components/HomeSearch";
import HomeProducts from "../components/HomeProducts";
function HomeScreen() {
    return (
        <Box flex={1} bg={Colors.subGreen}>
            <HomeSearch />
            <HomeProducts />
        </Box>
    );
}
export default HomeScreen