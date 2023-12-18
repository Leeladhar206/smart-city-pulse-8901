import React from "react";
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/layout";
import { TabPanel } from "@chakra-ui/tabs";
import { Button } from "@chakra-ui/button";

import { MdCheckCircle } from "react-icons/md";
import { Image } from "@chakra-ui/image";

export const TimeHome = () => {
  return (
    <div>
      <TabPanel>
        <Flex
          gap={10}
          w={{ base: "100%", md: "90%" }}
          m={"auto"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box w={{ base: "100%", md: "50%" }} mt={10}>
            <Heading size={"2xl"} mb={10}>
              Time Tracking
            </Heading>
            <Text
              w={"80%"}
              fontSize={"2xl"}
              textAlign={{ base: "center", md: "left" }}
            >
              Plan, track, & manage projects of any size, from simple to
              complex-across your team from one easy-to-use platform.
            </Text>

            <Flex
              w={"80%"}
              gap={"10%"}
              mt={10}
              fontSize={"2xl"}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box>
                <List spacing={5}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Timesheets
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Time estimates
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Timer
                  </ListItem>
                </List>
              </Box>
              <Box mt={{ base: 5 }}>
                <List spacing={5}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Reports
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Export timesheets
                  </ListItem>
                </List>
              </Box>
            </Flex>
            <Button
              display={"block"}
              m={{ base: "auto", md: 10 }}
              mt={10}
              h={"60px"}
              bg={"#4573D2"}
              color={"white"}
              _hover={{
                bg: "white",
                color: "black",
                border: "1px solid #4573D2",
                outline: "blue",
              }}
            >
              {" "}
              Get Started for free{" "}
            </Button>
          </Box>

          <Box w={{ base: "100%", md: "50%" }}>
            <Image
              src="https://img.freepik.com/free-vector/isometric-outline-time-management-concept_52683-55736.jpg?size=626&ext=jpg&ga=GA1.1.937730311.1702627727&semt=ais"
              w={"90%"}
            />
          </Box>
        </Flex>
      </TabPanel>
    </div>
  );
};
