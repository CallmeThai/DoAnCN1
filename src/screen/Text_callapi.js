
import { Box, Heading, ScrollView, FlatList, Text } from 'native-base';
import React, { useState, useEffect } from 'react'
import Colors from '../color';
import Orderinfo from '../components/Orderinfo';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderIterm from '../components/OrderIterm';
import OrderModel from '../components/OrderModel';
import axios from 'axios';
function Text_callapi() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        calGetUrl();
    }, [data]);

    const calGetUrl = async () => {
        axios
            .get("http://localhost/api/getProduct.php")

            .then(res => {
                setdata(res.data);
                console.log(res.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };
    return (
        <Box
            style={{
                paddingTop: 10,
                flex: 1,
                backgroundColor: 'white',
            }}>
            <FlatList
                data={data}
                key={data.idProduct}
                renderItem={({ item }) => (
                    <Box>
                        <Text>
                            {item.nameProduct}
                        </Text>
                    </Box>
                )}
            />
            <Text>dfdsf</Text>
        </Box>
    );
}
export default Text_callapi
// import { Center, Heading, Image, View, Box, Text, FlatList } from "native-base";
// import React, { Component, useState, useEffect } from 'react';

// import axios from 'axios';

// export default function tText_callapi() {
//     // const [data, setdata] = useState([]);

//     // useEffect(() => {
//     //     calGetUrl();
//     // }, [data]);

//     // const calGetUrl = async () => {
//     //     axios
//     //         .get("http://localhost/api/getProduct.php")

//     //         .then(res => {
//     //             setdata(res.data);
//     //             console.log(res.data)
//     //         })
//     //         .catch(function (error) {
//     //             console.log(error);
//     //         })
//     //         .finally(function () {
//     //             // always executed
//     //         });
//     // };


//     return (
//         <Box
//             style={{
//                 paddingTop: 10,
//                 flex: 1,
//                 backgroundColor: 'white',
//             }}>
//             {/* <FlatList
//                 data={data}
//                 key={data.idProduct}
//                 renderItem={({ item }) => (
//                     <View>
//                         <Text>
//                             {item.nameProduct}
//                         </Text>
//                     </View>
//                 )}
//             /> */}
//             <Text>dfdsf</Text>
//         </Box>
//     )

// }

