
import { Box, FormControl, Input, ScrollView, VStack } from "native-base";
import React from "react";
import Colors from "../../color";
import Buttone from "../Buttone";

const Inputs = [
    {
        label: "USERNAME",
        type: "text",
    },
    {
        label: "EMAIL",
        type: "text",
    },
    {
        label: "ADDRESS",
        type: "text",
    },
    {
        label: "PHONE NUMBER",
        type: "number",
    }
]

const Profile = () => {
    return (
        <Box h='full' bg={Colors.white} px={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack space={10} mt={5} pb={10}>
                    {
                        Inputs.map((i, index) => (
                            <FormControl key={index}>
                                <FormControl.Label _text={{
                                    fontSize: '12px',
                                    fontWeight: "bold"
                                }}
                                >
                                    {i.label}
                                </FormControl.Label>
                                <Input
                                    variant="rounded"
                                    borderWidth={0}
                                    bg={Colors.subGreen}
                                    py={4}
                                    type={i.type}
                                    color={Colors.black}
                                    fontSize={15}
                                    _focus={{
                                        bg: Colors.subGreen,
                                        borderColor: Colors.main,
                                        borderWidth: 1,
                                    }}
                                />
                            </FormControl>
                        ))
                    }
                    <Buttone bg={Colors.main} color={Colors.white}>CẬP NHẬT</Buttone>
                </VStack>
            </ScrollView>
        </Box>
    );
}
export default Profile