import {
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
import { Image } from "@chakra-ui/image";

export const Deadlines = () => {
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
            <Image
              src="https://img.freepik.com/free-vector/isometric-outline-time-management-concept_23-2148832037.jpg?size=626&ext=jpg&ga=GA1.1.1677208860.1702731884&semt=sph"
              w={"90%"}
            />
          </Box>

          <Box w={{ base: "100%", md: "50%" }} mt={10}>
            <Heading size={"2xl"} mb={10}>
              Track project time and hit Deadlines with ease
            </Heading>
            <Text
              w={{ base: "100%", md: "80%" }}
              fontSize={"2xl"}
              textAlign={{ base: "center", md: "left" }}
            >
              Allocate tasks efficiently with Aspireo Plan and monitor work
              hours with Aspireo Track. This two-way integration provides a
              direct view of your team's effort, ensuring projects are
              profitable and completed on schedule.
            </Text>

            <Button
              display={"block"}
              m={{ base: "auto", md: 10 }}
              ml={10}
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
