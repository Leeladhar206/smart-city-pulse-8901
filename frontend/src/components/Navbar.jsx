import React from "react";
import {
  Flex,
  IconButton,
  Collapse,
  VStack,
  useDisclosure,
  Button,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  Box,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aspireo from "../assets/Aspireo.logo.jpg";

export const Navbar = () => {
  const newFont = `
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&family=Outfit:wght@400;600;800&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">`;

  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Flex
      justify="space-around"
      align="center"
      pl={{ base: 3, lg: 10 }}
      pr={{ base: 3, lg: 10 }}
      pt={2}
      bg="white"
      // color="#4573D2"
      position="sticky"
      top={0}
      zIndex={1000}
      id="nav-menu"
      h={{ base: "70px", md: "100px" }}
      boxShadow="0px 2px 2px -2px rgba(0,0,0,0.2)"
      fontFamily="Lexend, sans-serif"
      w={{ base: "100%", md: "100%" }}
      m="auto"
    >
      <Box dangerouslySetInnerHTML={{ __html: newFont }} textAlign={"left"} />

      <Collapse in={isOpen} animateOpacity>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4} align="stretch">
                  <Link to="/">Home</Link>
                  <Link to="/tasks">Tasks</Link>
                  <Link to="/admin">Admin</Link>
                  <Link to="/about">About</Link>
                  <Link to="/signup">Signup</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/projects">Projects</Link>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Collapse>

      <IconButton
        display={{ md: "none" }}
        icon={isOpen ? <FaTimes /> : <FaBars />}
        onClick={onToggle}
        bg="transparent"
        _hover={{ bg: "transparent" }}
        alignItems="center"
        justifyContent="center"
        size="lg"
      />
      <Box w={"30%"}>
        <Link to="/">
          <Image
            src={Aspireo}
            alt="Logo"
            width="40%"
            display={{ base: "none", md: "block" }}
          />
        </Link>
      </Box>

      <Flex
        display={{ base: "none", md: "flex" }}
        // flex={1}
        w={"70%"}
        align="center"
        justify="space-around"
        fontSize={"md"}
        ml={{ base: 0, md: 10 }}
        mb={2}
        gap={{ base: "10px", md: "none" }}
      >
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/about">About</Link>
        <Link to="/signup">Signup</Link>
      </Flex>
      {/* <Spacer /> */}

      <Box w={"30%"}>
        <Button
          display={"block"}
          margin={"auto"}
          mr={3}
          mb={2}
          colorScheme="#06113C"
          variant="outline"
          _hover={{
            bg: "#4573D2",
            color: "white",
          }}
        >
          <Link to="/login">Login</Link>
        </Button>
      </Box>
    </Flex>
  );
};
