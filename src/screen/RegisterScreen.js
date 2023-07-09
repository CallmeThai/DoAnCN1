import { Image, Text, Box, Heading, VStack, Input, Button, Pressable } from "native-base";
import React, { useState } from 'react';
import Colors from '../color.js';
import { Zocial, Ionicons, FontAwesome } from '@expo/vector-icons';
import CalllURL from "../CalllURL.js";

function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // Perform registration logic here, such as sending a request to your PHP backend

        // Create a form data object to send the registration data
        const formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);
        let data = {
            username: email,
            password: password
        }

        // Send the registration request to your PHP backend using fetch
        fetch(CalllURL.URL_setNewUser, {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the PHP backend
                if (data.success) {
                    // Registration successful, navigate to the next screen
                    navigation.navigate("Login");
                } else {
                    // Registration failed, display an error message
                    alert(data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <Box flex={1} bg={Colors.black}>
            <Image
                flex={1}
                alt="Logo"
                resizeMode="cover"
                size="lg"
                w="full"
                source={require("../../assets/imagebackground.jpg")}
            />
            <Box w="full" h="full" position="absolute" top="0" px="6" justifyContent="center">
                <Heading>ĐĂNG KÍ</Heading>
                <VStack space={7} pt="6">
                    <Input
                        onChangeText={text => setEmail(text)}
                        value={email}
                        InputLeftElement={<Zocial name="email" size={20} color={Colors.main} />}
                        variant="underlined"
                        placeholder="user@gmail.com"
                        w="70%"
                        pl={2}
                        color={Colors.main}
                        borderBottomColor={Colors.underline}
                    />
                    <Input
                        onChangeText={text => setPassword(text)}
                        value={password}
                        InputLeftElement={<Ionicons name="eye" size={20} color={Colors.main} />}
                        variant="underlined"
                        placeholder="***************"
                        type="password"
                        w="70%"
                        pl={2}
                        color={Colors.main}
                        borderBottomColor={Colors.underline}
                    />
                </VStack>
                <Button
                    _pressed={{
                        bg: Colors.main,
                    }}
                    my={30}
                    w="40%"
                    rounded={50}
                    bg={Colors.main}
                    onPress={handleRegister}
                >
                    ĐĂNG KÍ
                </Button>
                <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
                    <Text>Bạn đã có tài khoản?</Text>
                    <Text color={Colors.main}>ĐĂNG NHẬP</Text>
                </Pressable>
            </Box>
        </Box>
    );
}

export default RegisterScreen;