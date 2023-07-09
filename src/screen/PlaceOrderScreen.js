
import { Box, Heading, ScrollView } from 'native-base';
import React from 'react'
import Colors from '../color';
import Orderinfo from '../components/Orderinfo';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderIterm from '../components/OrderIterm';
import PlaceOrderModel from '../components/PlaceOrderModel';
function PlaceOrderScreen() {
    return (
        <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Orderinfo
                        title="CUSTOMER"
                        subTitle="Quoc Thai"
                        text="qthai2401@gmail.com"
                        icon={<FontAwesome name='user' size={30} color={Colors.white} />}
                    />
                    <Orderinfo
                        title="SHIPPING INFO"
                        subTitle="Shipping"
                        text="Pay method: MoMo"
                        icon={<FontAwesome5 name='shipping-fast' size={30} color={Colors.white} />}
                    />
                    <Orderinfo
                        title="DELIVER TO"
                        subTitle="ADDRESS: "
                        text="GIA LAI"
                        icon={<Ionicons name='location-sharp' size={30} color={Colors.white} />}
                    />
                </ScrollView>
            </Box>
            {/* Order Items */}
            <Box px={6} flex={1} pb={3}>
                <Heading bold fontSize={15} isTruncated my={4}>
                    PRODUCTS
                </Heading>
                <OrderIterm />
                {/* Total */}
                <PlaceOrderModel />
            </Box>
        </Box>
    );
}
export default PlaceOrderScreen