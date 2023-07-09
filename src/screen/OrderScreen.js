
import { Box, Heading, ScrollView } from 'native-base';
import React from 'react'
import Colors from '../color';
import Orderinfo from '../components/Orderinfo';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderIterm from '../components/OrderIterm';
import OrderModel from '../components/OrderModel';
function OrderScreen() {
    return (
        <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
            <Box>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <Orderinfo
                        title="SHIPPING INFO"
                        success
                        subTitle="Shipping"
                        text="Pay method: MoMo"
                        icon={<FontAwesome5 name='shipping-fast' size={30} color={Colors.white} />}
                    />
                    <Orderinfo
                        title="DELIVER TO"
                        subTitle="ADDRESS: "
                        danger
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
                <OrderModel />
            </Box>
        </Box>
    );
}
export default OrderScreen