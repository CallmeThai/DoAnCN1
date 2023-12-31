import { Box, Center, Text, ScrollView, HStack, Button } from "native-base";
import React from 'react'
import Colors from "../color";
import CartItems from "../components/CartItems";
import Buttone from "../components/Buttone";
import { useNavigation } from "@react-navigation/native";
function CartScreen() {
    const navigation = useNavigation()
    return (
        <Box flex={1} safeArea bg={Colors.subGreen}>
            {/* Header */}
            <Center w="full" py={5}>
                <Text color={Colors.black} fontSize={20} bold>Cart</Text>
            </Center>
            {/* IF CART IS EMPTY  */}
            {/* <CartEmpty /> */}
            {/* CART ITEMS */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <CartItems />
                {/* Total */}
                <Center mt={5}>
                    <HStack
                        rounded={50}
                        justifyContent="space-between"
                        bg={Colors.white}
                        shadow={2}
                        w="90%"
                        pl={5}
                        h={45}
                        alignItems="center"
                    >
                        <Text bold color={Colors.orange} >Total</Text>
                        <Button
                            px={10}
                            h={45}
                            rounded={50}
                            bg={Colors.main}
                            _text={{
                                color: Colors.white,
                                fontWeight: "semibold",
                            }}
                            _pressed={{
                                bg: Colors.main
                            }}>$1000</Button>
                    </HStack>
                </Center>
                {/* Chekout */}
                <Center px={5}>
                    <Buttone onPress={() => navigation.navigate("Shipping")} bg={Colors.black} color={Colors.white} mt={10}>CHECKOUT</Buttone>
                </Center>
            </ScrollView>
        </Box>
    );
}
export default CartScreen