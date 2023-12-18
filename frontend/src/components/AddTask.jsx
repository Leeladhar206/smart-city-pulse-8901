import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { css } from "@emotion/react";

const initialState = {
  title: "",
  description: "",
  dueDateTime: "",
  priority: "Medium",
  tags: "",
  status: "Not Started",
};

const AddTask = ({ isOpen, onClose, onAddTask }) => {
  const [step, setStep] = useState(1);
  const [taskData, setTaskData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = (i) => {
    setStep(i);
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  const handleAddTask = () => {
    onAddTask(taskData);
    onClose();
    setTaskData(initialState);
  };

  const modalStyle = css`
    backdrop-filter: blur(40px);
    background-color: rgba(224, 224, 227, 0.2);
    color: #ee1515;
  `;
  const modalStep = css`
    backdrop-filter: blur(50px);
    background-color: rgba(255, 255, 255, 0.808);
    color: #000000;
  `;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay css={modalStyle} />
      <ModalContent css={modalStep}>
        <ModalHeader>Add Task - Step {step}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {step === 1 && (
            <>
              <FormControl mb={4}>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  value={taskData.title}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  value={taskData.description}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Priority</FormLabel>
                <Select
                  name="priority"
                  value={taskData.priority}
                  onChange={handleChange}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </Select>
              </FormControl>
            </>
          )}

          {step === 2 && (
            <>
              <FormControl mb={4}>
                <FormLabel>Tags</FormLabel>
                <Input
                  type="text"
                  name="tags"
                  value={taskData.tags}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Due Date</FormLabel>
                <Input
                  type="datetime-local"
                  name="dueDateTime"
                  value={taskData.dueDateTime}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Status</FormLabel>
                <Select
                  name="status"
                  value={taskData.status}
                  onChange={handleChange}
                >
                  <option value="Not Started">Not Started</option>
                  <option value="Started">Started</option>
                  <option value="On Going">On Going</option>
                  <option value="Completed">Completed</option>
                </Select>
              </FormControl>
            </>
          )}
        </ModalBody>

        <ModalFooter>
          {step === 1 && (
            <Button colorScheme="blue" mr={3} onClick={() => handleNextStep(2)}>
              Next
            </Button>
          )}

          {step === 2 && (
            <>
              <Button onClick={() => handleNextStep(1)}>Previous</Button>
              <Button colorScheme="blue" mr={3} onClick={handleAddTask}>
                Add Task
              </Button>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddTask;
