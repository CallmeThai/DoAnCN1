import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "native-base";
import React from "react";
import HomeScreen from "../screen/HomeScreen";
import SingleProductScreen from "../screen/SingleProductScreen";
import ShippingScreen from "../screen/ShippingScreen";
import PaymentScreen from "../screen/PaymentScreen";
import PlaceOrderScreen from "../screen/PlaceOrderScreen";

const Stack = createNativeStackNavigator()

const StackNav = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Single" component={SingleProductScreen} />
            <Stack.Screen name="Shipping" component={ShippingScreen} />
            <Stack.Screen name="Checkout" component={PaymentScreen} />
            <Stack.Screen name="Placeorder" component={PlaceOrderScreen} />
        </Stack.Navigator>
    )
}

export default StackNav