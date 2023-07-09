import { Image, Text, Box, Heading, VStack, Input, Button, Pressable } from "native-base";
import React, { useState } from 'react';
import Colors from '../color.js';
import { Zocial, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CalllURL from "../CalllURL.js";

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [idUser, setidUser] = useState('');

    const handleLogin = () => {
        const formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);
        let data = {
            username: email,
            password: password
        }

        // Send the login request to your PHP backend using fetch
        fetch(CalllURL.URL_getUser, {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the PHP backend
                if (data.user) {
                    setidUser(data.user.idUser)
                    // Login successful, navigate to the next screen
                    navigation.navigate("Bottom");
                    AsyncStorage.setItem('username', email);
                    AsyncStorage.setItem('idUser', data.user.idUser)
                } else {
                    // Login failed, display an error message
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
                <Heading>ĐĂNG NHẬP</Heading>
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
                    onPress={handleLogin}
                >
                    ĐĂNG NHẬP
                </Button>
                <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
                    <Text>Bạn chưa có tài khoản?</Text>
                    <Text color={Colors.deepestGray}>ĐĂNG KÍ</Text>
                </Pressable>
            </Box>
        </Box>
    );
}

export default LoginScreen;