import { Box, Center, FormControl, HStack, Image, Input, ScrollView, Spacer, Text, VStack } from 'native-base';
import React from 'react'
import Colors from '../color';
import Buttone from '../components/Buttone';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const paymentMethod = [
    {
        image: require("../../assets/image/momo.png"),
        alt: "momo",
        icon: "Ionicons"
    },
    {
        image: require("../../assets/image/mbbank.jpg"),
        alt: "mbbank",
        icon: "fontAwesome"
    },
    {
        image: require("../../assets/image/zalopay.png"),
        alt: "zalopay",
        icon: "fontAwesome"
    },

]
function PaymentScreen() {
    const navigation = useNavigation()
    return (
        <Box flex={1} safeAreaTop bg={Colors.main} py={5}>
            {/* Header */}
            <Center pb={15}>
                <Text color={Colors.white} fontSize={14} bold>
                    PAYMENT METHOD
                </Text>
            </Center>
            {/* Selection */}
            <Box h='full' bg={Colors.subGreen} px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={6} mt={5}>
                        {paymentMethod.map((i, index) => (
                            <HStack key={index}
                                alignItems='center'
                                bg={Colors.white}
                                px={3}
                                py={1}
                                justifyContent="space-between"
                                rounded={10}
                            >
                                <Box>
                                    <Image source={i.image}
                                        alt={i.alt}
                                        resizeMode="contain"
                                        w={60}
                                        h={50}
                                    />
                                </Box>
                                {i.icon === "Ionicons" ? <Ionicons
                                    name="checkmark-circle"
                                    size={30}
                                    color={Colors.main} /> : <FontAwesome
                                    name="circle-thin"
                                    size={30}
                                    color={Colors.main} />}
                            </HStack>
                        ))}

                        <Buttone onPress={() => navigation.navigate("Placeorder")} bg={Colors.main} color={Colors.white} mt={5}>CONTINUE</Buttone>
                        <Text italic textAlign="center">Payment method is <Text
                            bold>
                            Momo
                        </Text> by default</Text>
                    </VStack>
                </ScrollView>
            </Box>
        </Box>
    );
}
export default PaymentScreen