import React, { useState } from "react";
import { Box, Button, Heading, Text, Input, Flex } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateProjectChatFun } from "../redux/projectReducer/action";

const ProjectCard = ({ project, onAddCollaborator, onAddTask, users }) => {
  const { name, description, colleborators } = project;

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const collaboratorUsernames = colleborators.map((collaboratorId) => {
    const user = users.find((user) => user._id === collaboratorId);
    return user ? user.userName : collaboratorId;
  });

  const [chatMessages, setChatMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setChatMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, newMessage];
        console.log(updatedMessages);
        // dispatch(updateProjectChatFun(updatedMessages,project._id,token));
        return updatedMessages;
      });
      setNewMessage("");
    }
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} mb={4}>
      <Heading size="md">{name}</Heading>
      <Text mt={2} color="gray.600">
        {description}
      </Text>

      <Text>Collaborators:</Text>
      {collaboratorUsernames.map((collaborator, index) => (
        <Text key={index}>{collaborator}</Text>
      ))}

      <Button
        size="sm"
        mt={4}
        colorScheme="blue"
        onClick={() => onAddCollaborator(project)}
      >
        Add Collaborator
      </Button>

      <Button
        size="sm"
        mt={2}
        colorScheme="green"
        onClick={() => onAddTask(project)}
      >
        Add Task
      </Button>

      <Box mt={4}>
        <Text fontWeight="bold" mb={2}>
          Chat:
        </Text>
        <Box borderWidth="1px" p={2} maxHeight="200px">
          {chatMessages.map((message, index) => (
            <Text key={index}>
              <strong>{message.user}:</strong> {message.message}
            </Text>
          ))}
        </Box>
        <Flex mt={2}>
          <Input
            value={newMessage}
            size="md"
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <Button ml={2} onClick={handleSendMessage}>
            Send
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProjectCard;
