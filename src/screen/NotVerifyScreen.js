import { Image, Box, Center, VStack } from "native-base";
import React from 'react'
import Colors from "../color";
import { Dimensions } from 'react-native';
import Buttone from "../components/Buttone";

function NotVerifyScreen() {
    // const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;
    return (
        // <View style={{ width: windowWidth, height: windowHeight, justifyContent: 'center', alignItems: 'center' }}>
        //     <Image style={{ width: 50, height: 50 }}
        //         source={require('../../assets/favicon.png')} />
        // </View>
        <Box flex={1} bg={Colors.main} safeAreaTop>
            <Center w="full" h={250} >
                <Image
                    source={require('../../assets/favicon.png')}
                    alt="Logo"
                    size="lg"
                />
            </Center>
            <VStack space={6} px={5} alignItems="center">
                <Buttone bg={Colors.black} color={Colors.white}>REGISTER</Buttone>
                <Buttone bg={Colors.white} color={Colors.black}>LOGIN</Buttone>
            </VStack>
        </Box>

    );
}
export default NotVerifyScreen