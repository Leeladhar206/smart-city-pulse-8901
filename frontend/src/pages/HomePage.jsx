import {
  AspectRatio,
  Box,
  Button,
  Collapse,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { TasksHome } from "../components/TasksHome";
import { TimeHome } from "../components/TimeHome";
import { Deadlines } from "../components/Deadlines";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box
        //bgGradient="linear(to-r, #ffffff,#ffffff ,#ffffff, #e5e7f0 ,#b0bbe4, #4573D2)"
        pt={"150px"}
      >
        <Box w={"70%"} m={"auto"} textAlign={"center"} pb={"100px"}>
          <Heading fontWeight={"400"} size={"2xl"} lineHeight={"70px"} mb={10}>
            Empower your aspirations with
            <span style={{ fontWeight: "bold", color: "#4573D2" }}>
              {" "}
              Aspireo{" "}
            </span>
            – Where Vision Meets Project, and Dreams Take Flight
          </Heading>
          <Text m={10} fontSize={"2xl"}>
            Keep everything in the same place — even if your team isn’t.
          </Text>
          <Flex
            w={"50%"}
            m={"auto"}
            gap={2}
            justifyContent={"space-around"}
            alignItems={"center"}
            pt={10}
          >
            <Input
              placeholder="email"
              size="lg"
              w={"50%"}
              outline="#4573D2"
              border={"2px solid #06113C"}
              h={"60px"}
              borderRadius={"30px"}
            />
            <Button
              h="60px"
              bgColor={"#06113C"}
              color={"white"}
              borderRadius={"30px"}
              w="40%"
              _hover={{
                bg: "white",
                color: "black",
                border: "1px solid #4573D2",
                outline: "blue",
              }}
            >
              Sign up -it's free
            </Button>
          </Flex>
        </Box>

        <Flex
          m={"auto"}
          bg="linear-gradient(0deg,#ffffff,#ffffff 24.59%,hsla(0,0%,100%,0))"
          //bgGradient="linear(to-r, #ffffff,#ffffff ,#ffffff, #e5e7f0 ,#b0bbe4, #4573D2)"
          gap={10}
          pt={"100px"}
        >
          <Box w={"50%"}>
            <Image
              src="https://img.freepik.com/free-vector/blogging-isometric-concept-with-content-plan-making-process-3d-illustration_1284-55140.jpg?size=626&ext=jpg&ga=GA1.1.937730311.1702627727&semt=ais"
              w={"80%"}
              display={"block"}
              margin={"auto"}
            />
          </Box>
          <Flex
            w={"50%"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box w={"70%"} m={"auto"}>
              <Heading size={"2xl"} mb={5}>
                Simple to build.
              </Heading>
              <Heading size={"2xl"} mb={5}>
                Intuitive to use.
              </Heading>
              <Text mt={10} fontSize={"2xl"} mb={5}>
                Enable those closest to the real-world details of your business
                to customize the apps that accelerate how work gets done.
              </Text>
              <Link href="#" color={"#4573D2"} fontSize={"2xl"}>
                Explore the platform
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Box w={"90%"} m={"auto"} textAlign={"center"} mt={5} mb={"100px"}>
        <Box mt={10} mb={10}>
          <Heading w={"70%"} m={"auto"} mt={10} mb={10} size={"2xl"}>
            Drive efficiency across all departments
          </Heading>
          <Text w={"60%"} m={"auto"} mt={10} mb={10} fontSize={"2xl"}>
            Aspireo streamlines work processes for maximum efficiency,
            empowering teams across all departments to collaborate, manage
            projects, drive strategic initiatives, and achieve goals.
          </Text>
        </Box>
        <Flex gap={20} pt={"100px"} w={"90%"} m={"auto"}>
          <Box w={"50%"} textAlign={"left"}>
            <Heading size={"2xl"} lineHeight={"60px"} mb={10}>
              The one place for all your projects and team collaboration
            </Heading>
            <Text mt={10} fontSize={"xl"}>
              <span style={{ fontWeight: "bold" }}>Earlier : </span>
              Projects were scattered, it was hard to know where things stood,
              communication gaps existed, and people felt stressed.
            </Text>
            <Text mt={10} fontSize={"xl"}>
              <span style={{ fontWeight: "bold" }}> With Aspireo :</span>{" "}
              Everything is organized, project progress is everyone's on the
              same page, and people feel at ease.
            </Text>
          </Box>
          <Box w={"50%"}>
            <AspectRatio>
              <video
                src="https://cdn.wrike.com/video/LP_Animation_Reports_1x.mp4"
                autoPlay={true}
                muted={true}
                loop={true}
              />
            </AspectRatio>
          </Box>
        </Flex>
      </Box>

      <Flex w={"80%"} m={"auto"} mt={10} mb={10} gap={10}>
        <Heading size={"3xl"} w={"50%"} lineHeight={"80px"}>
          No matter your workflow,you can build it in Aspireo
        </Heading>
        <Text fontSize={"3xl"} w={"40%"} m={"auto"} color={"gray"}>
          End silos with a unique platform that connects every part of your
          work.
        </Text>
      </Flex>

      <Box w={"90%"} m={"auto"} mt={"100px"} mb={"50px"}>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab fontSize={"2xl"}>Tasks & Projects</Tab>
            <Tab fontSize={"2xl"}>Time Tracking</Tab>
            <Tab fontSize={"2xl"}>Deadlines</Tab>
          </TabList>
          <TabPanels>
            <TasksHome />

            <TimeHome />

            <Deadlines />
          </TabPanels>
        </Tabs>
      </Box>

      <Box w={"90%"} m={"auto"}>
        <Button
          onClick={onToggle}
          mt={10}
          h={"60px"}
          bg={"#4573D2"}
          color={"white"}
        >
          Click Me
        </Button>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="#4573D2"
            rounded="md"
            shadow="md"
            _hover={{
              bg: "white",
              color: "black",
              border: "1px solid #4573D2",
              outline: "blue",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus in sit quisquam unde ullam repellendus nemo dolor
              blanditiis nisi accusantium. Quae asperiores nobis repellat
              tempora alias. Explicabo voluptates nulla doloribus.
            </p>
          </Box>
        </Collapse>
      </Box>

      <Footer />
    </>
  );
};
