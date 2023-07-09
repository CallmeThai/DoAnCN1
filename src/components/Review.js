import { View, Text, Box, Heading, VStack, FormControl, Select, CheckIcon, TextArea } from "native-base";
import Colors from "../color";
import Raiting from "./Raiting";
import Message from "./Notification/Message";
import { useState } from "react";
import Buttone from "./Buttone";
export default function Review() {
    const [ratings, setRatings] = useState('')
    return (
        <Box my={9}>
            <Heading bold fontSize={15} mb={2} >
                REVIEW
            </Heading>
            {/* <Message
                color={Colors.main}
                bg={Colors.deepGray}
                bold
                children={"NO REVIEW"} /> */}
            <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
                <Heading fontSize={15} color={Colors.black}>User Thai
                </Heading>
                <Raiting value={4} />
                <Text my={2} fontSize={10}>16/05/2023</Text>
                <Message
                    color={Colors.black}
                    bg={Colors.white}
                    size={12}
                    children={"Giày Thể Thao Nike Air Jordan 1 High OG UNC University Blue"} />
            </Box>
            {/* <Box mt={6}>
                <Heading fontSize={15} bold mb={4}>WRITE REVIEW
                </Heading>
                <VStack space={6}>
                    <FormControl>
                        <FormControl.Label _text={{
                            fontSize: "12px",
                            fontWeight: "bold",
                        }}>
                            Raiting
                        </FormControl.Label>
                        <Select bg={Colors.subGreen} borderWidth={0} rounded={5} py={3} placeholder="Choose your rate"
                            _selectedItem={{
                                bg: Colors.subGreen,
                                endIcon: <CheckIcon size={5} />,
                            }}
                            selectedValue={ratings}
                            onValueChange={(e) => setRatings(e)}
                        >
                            <Select.Item label="1 - Poor" value="1" />
                            <Select.Item label="2 - Fair" value="2" />
                            <Select.Item label="3 - Good" value="3" />
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label _text={{
                            fontSize: "12px",
                            fontWeight: "bold",
                        }}>
                            Comment
                        </FormControl.Label>
                        <TextArea h={20} w="full" placeholder="This is your commet...." borderWidth={0}
                            bg={Colors.subGreen}
                            py={4}
                            _focus={{
                                bg: Colors.subGreen

                            }}
                        />
                    </FormControl>
                    <Buttone bg={Colors.main} color={Colors.white}>
                        SUBMIT
                    </Buttone>
                    <Message
                        color={Colors.white}
                        bg={Colors.black}
                        size={12}
                        children={"Please 'Login' to write your commet"} />
                </VStack>
            </Box> */}
        </Box>
    );
}
