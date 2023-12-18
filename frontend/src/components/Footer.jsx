import { Box, Flex, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Aspireo from "../assets/Aspireo.logo.jpg";

import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { ImLinkedin } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box bg={"blue.50"} mt={10}>
      <Flex
        w={"80%"}
        m={"auto"}
        pt={10}
        justifyContent={"space-between"}
        fontSize={"md"}
      >
        <Box w={"15%"}>
          <Image src={Aspireo} w={"80%"} borderRadius={"40px"} />
          <Text
            display={"flex"}
            fontSize={"lg"}
            alignItems={"center"}
            gap={5}
            mt={5}
            fontWeight={"bold"}
          >
            <Icon as={FaPhone} w={"25px"} h={"25px"} /> +91 992234509
          </Text>
          <Text
            display={"flex"}
            fontSize={"lg"}
            alignItems={"center"}
            gap={5}
            mt={5}
            fontWeight={"bold"}
          >
            <Icon as={MdEmail} w={"25px"} h={"25px"} /> hello@Aspireo.com
          </Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={3}>
          <Heading>Company</Heading>
          <Text>About Us</Text>
          <Text>Blog</Text>
          <Text>Customer Stories</Text>
          <Text>Integrations</Text>
          <Text>Careers</Text>
          <Text>Support</Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={3}>
          <Heading>Teams</Heading>
          <Text>Marketing</Text>
          <Text>Agencies</Text>
          <Text>Project Managment</Text>
          <Text>Product Development</Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={3}>
          <Heading>Industries</Heading>
          <Text>Healthcare</Text>
          <Text>Real Estate</Text>
          <Text>Accounting</Text>
          <Text>Manufacturing</Text>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={3}>
          <Heading>Alternatives</Heading>
          <Text>Top Project Management</Text>
          <Text>Microsoft Project</Text>
          <Text>Smartsheet</Text>
          <Text>Asana</Text>
          <Text>Trello</Text>
        </Box>
      </Flex>

      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        h={"100px"}
        bg={"#06113C"}
        mt={6}
        color={"white"}
      >
        <Flex w={"30%"} justifyContent={"space-around"} fontSize={"lg"}>
          <Text>Privacy Policy</Text>
          <Text>Security Overview</Text>
          <Text>Help Docs</Text>
        </Flex>

        <Flex w={"15%"} justifyContent={"space-around"}>
          <Link href="https://in.linkedin.com/" target="blank">
            <Icon as={ImLinkedin} w={"30px"} h={"30px"} />
          </Link>
          <Link href="https://www.facebook.com/" target="blank">
            <Icon as={FaFacebookSquare} w={"30px"} h={"30px"} />
          </Link>
          <Link href="https://twitter.com/i/flow/login" target="blank">
            <Icon as={FaTwitter} w={"30px"} h={"30px"} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
