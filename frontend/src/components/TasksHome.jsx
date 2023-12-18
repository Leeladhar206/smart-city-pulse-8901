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
import { MdCheckCircle } from "react-icons/md";

import React from "react";
import { Button } from "@chakra-ui/button";

export const TasksHome = () => {
  return (
    <div>
      {" "}
      <TabPanel>
        <Flex
          gap={10}
          w={{ base: "100%", md: "90%" }}
          m={"auto"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box w={{ base: "100%", md: "50%" }}>
            <AspectRatio
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <video
                src="https://cdn.wrike.com/video/LP_Animation_Request_1x.mp4"
                autoPlay={true}
                muted={true}
                loop={true}
              />
            </AspectRatio>
          </Box>
          <Box w={{ base: "100%", md: "50%" }} mt={10}>
            <Heading size={"2xl"} mb={10}>
              Tasks & Projects
            </Heading>
            <Text
              w={{ base: "100%", md: "80%" }}
              fontSize={"2xl"}
              textAlign={{ base: "center" }}
            >
              Plan, track, & manage projects of any size, from simple to
              complex-across your team from one easy-to-use platform.
            </Text>

            <Flex
              w={"80%"}
              gap={"15%"}
              mt={10}
              fontSize={"2xl"}
              flexDirection={{ base: "column", md: "row" }}
            >
              <Box>
                <List spacing={5}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Forms
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Workflows
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Custom fields
                  </ListItem>
                </List>
              </Box>
              <Box mt={{ base: 5 }}>
                <List spacing={5}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Dependencies
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    Reports
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
        </Flex>
      </TabPanel>
    </div>
  );
};
