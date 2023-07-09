import { Center, Heading, Image, View, Text, Button } from "native-base";
import React, { useState, useEffect } from 'react'
import Colors from "../color";
import Tabs from "../components/Profile/Tabs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import Buttone from "../components/Buttone";

function ProfileScreen() {
    const [username, setusername] = useState('');
    const navigation = useNavigation()
    useEffect(() => {
        AsyncStorage.getItem('username').then(result => {
            setusername(result);
        });

    }, [AsyncStorage.getItem('username')]);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('username');
        navigation.navigate('Login')
    }
    return (
        <>
            <Center bg={Colors.main} pt={10} pb={6}>
                <Image source={{ uri: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" }}
                    alt="profile"
                    w={24}
                    h={24}
                    resizeMode="cover"
                />
                <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
                    Hello, {username}
                </Heading>
                <Button px={7} py={1.5} rounded={50} bg={Colors.black} onPress={handleLogout}> ĐĂNG XUẤT</Button>

            </Center>
            {/* TABS */}
            <Tabs />
        </>
    );
}
export default ProfileScreen