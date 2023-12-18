import { Box, Text, VStack, HStack, Badge, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const TaskCard = ({ task, onEdit, onDelete }) => {
  const [remainingTime, setRemainingTime] = useState("");
  const [dt, setDt] = useState("");

  useEffect(() => {
    const dueDate = new Date(task.dueDateTime);
    const currentTime = new Date();

    const timeDifference = dueDate.getTime() - currentTime.getTime();

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );

    const formattedDays = days === 0 ? "" : days < 0 ? `-${days}d` : `${days}d`;
    const formattedHours = hours < 0 ? `${hours}h` : `${hours}h`;
    const formattedMinutes = minutes < 0 ? `${minutes}m` : `${minutes}m`;

    if (task.status === "Completed") {
      setRemainingTime("Done");
    } else if (timeDifference < 0) {
      setRemainingTime("Over Due");
    } else {
      setRemainingTime(
        `${formattedDays} ${formattedHours} ${formattedMinutes} remaining`
      );
    }

    setDt(task.dueDateTime.split("T").join(" "));
  }, [task.dueDateTime, task.status]);

  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      bg={
        task.status === "Completed"
          ? "#E6FEEB"
          : task.status === "Started"
          ? "#F0F0FF"
          : "#FCF7E9"
      }
      maxW="md"
      w="100%"
    >
      <VStack align="start" spacing={2}>
        <Text fontSize="lg" fontWeight="bold">
          {task.title}
        </Text>
        <Text color="gray.500">{task.description}</Text>
        <HStack>
          <Badge colorScheme="blue">{task.status}</Badge>
          <Badge colorScheme="orange">{task.priority}</Badge>
        </HStack>
        <Text fontSize="sm" color="gray.500">
          Due: {dt}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Concludes:{remainingTime}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Tags: {task.tags}
        </Text>
        <HStack mt={4}>
          <Button
            colorScheme="blue"
            variant={"outline"}
            onClick={() => onEdit(task)}
          >
            Edit
          </Button>
          <Button
            colorScheme="red"
            variant={"outline"}
            onClick={() => onDelete(task._id)}
          >
            Delete
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default TaskCard;
