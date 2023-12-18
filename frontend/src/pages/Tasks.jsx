import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Input, SimpleGrid } from "@chakra-ui/react";
import AddTask from "../components/AddTask";
import {
  addTaskFun,
  deleteTaskFun,
  getTasksFun,
  updateTaskFun,
} from "../redux/taskReducer/action";
import { useSelector, useDispatch } from "react-redux";
import TaskCard from "../components/TaskCard";
import UpdateTask from "../components/UpdateTask";

export const Tasks = () => {
  const [isAddTaskModalOpen, setAddTaskModalOpen] = useState(false);
  const [isUpdateTaskModalOpen, setUpdateTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const [refresh, setRefresh] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [dueDateSort, setDueDateSort] = useState("all");
  const [prioritySort, setPrioritySort] = useState("all");

  const { tasks, isLoading, isError } = useSelector(
    (store) => store.taskReducer
  );

  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  console.log(tasks, isLoading, isError);

  const handleAddTask = (taskData) => {
    dispatch(addTaskFun(taskData, token));
    setRefresh(!refresh);
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setUpdateTaskModalOpen(true);
  };

  const handleUpdateTask = (updatedTaskData, taskId) => {
    setUpdateTaskModalOpen(false);
    dispatch(updateTaskFun(updatedTaskData, taskId, token));
    setRefresh(!refresh);
  };

  const handleDeleteTask = (taskId) => {
    // console.log(taskId);
    dispatch(deleteTaskFun(taskId, token));
    setRefresh(!refresh);
  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  const overdueTasks = tasks.filter((task) => {
    const currentDate = new Date();
    const dueDate = new Date(task.dueDateTime);
    return task.status !== "Completed" && dueDate < currentDate;
  }).length;

  const percentage = Math.floor((completedTasks / totalTasks) * 100);

  const completionPercentage = totalTasks === 0 ? 0 : percentage;

  const filteredTasks = tasks.filter((task) => {
    const lowerCaseSearch = searchInput.toLowerCase();
    const taskTitle = task.title.toLowerCase();

    return taskTitle.includes(lowerCaseSearch);
  });

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const handleDueDateSort = (option) => {
    setDueDateSort(option);
  };

  const handlePrioritySort = (option) => {
    setPrioritySort(option);
  };

  const compareDueDate = (taskA, taskB) => {
    const dateA = new Date(taskA.dueDateTime).getTime();
    const dateB = new Date(taskB.dueDateTime).getTime();

    if (taskA.status === "Completed" && taskB.status === "Completed") {
      return 0;
    } else if (taskA.status === "Completed") {
      return 1;
    } else if (taskB.status === "Completed") {
      return -1;
    } else if (dueDateSort === "asc") {
      return dateA - dateB;
    } else if (dueDateSort === "desc") {
      return dateB - dateA;
    }
    return 0;
  };

  const comparePriority = (taskA, taskB) => {
    const priorityOrder = { Low: 0, Medium: 10, High: 20 };

    if (taskA.status === "Completed" && taskB.status === "Completed") {
      return 0;
    } else if (taskA.status === "Completed") {
      return 1;
    } else if (taskB.status === "Completed") {
      return -1;
    } else if (prioritySort === "asc") {
      return priorityOrder[taskA.priority] - priorityOrder[taskB.priority];
    } else if (prioritySort === "desc") {
      return priorityOrder[taskB.priority] - priorityOrder[taskA.priority];
    }
    return 0;
  };

  console.log(dueDateSort, prioritySort);

  useEffect(() => {
    dispatch(getTasksFun(token));
  }, [dispatch, refresh]);

  const filteredAndSortedTasks = filteredTasks.slice();

  if (dueDateSort !== "all") {
    filteredAndSortedTasks.sort(compareDueDate);
  }
  if (prioritySort !== "all") {
    filteredAndSortedTasks.sort(comparePriority);
  }

  return (
    <div>
      <Box m="auto">
        <Button onClick={() => setAddTaskModalOpen(true)}>Add Task</Button>
        <AddTask
          isOpen={isAddTaskModalOpen}
          onClose={() => setAddTaskModalOpen(false)}
          onAddTask={handleAddTask}
        />
        {selectedTask && (
          <UpdateTask
            isOpen={isUpdateTaskModalOpen}
            onClose={() => {
              setUpdateTaskModalOpen(false);
              setSelectedTask(null);
            }}
            onUpdateTask={handleUpdateTask}
            data={selectedTask}
          />
        )}
      </Box>

      <Flex justify="center" p={4}>
        <Input
          type="text"
          w="md"
          placeholder="Search tasks..."
          value={searchInput}
          onChange={handleSearch}
        />
      </Flex>

      <Flex justify="center" p={4}>
        <Button
          onClick={() => handleDueDateSort("all")}
          variant={dueDateSort === "all" ? "solid" : "outline"}
        >
          All
        </Button>
        <Button
          onClick={() => handleDueDateSort("asc")}
          variant={dueDateSort === "asc" ? "solid" : "outline"}
        >
          Due Date Asc
        </Button>
        <Button
          onClick={() => handleDueDateSort("desc")}
          variant={dueDateSort === "desc" ? "solid" : "outline"}
        >
          Due Date Desc
        </Button>
      </Flex>
      <Flex justify="center" p={4}>
        <Button
          onClick={() => handlePrioritySort("all")}
          variant={prioritySort === "all" ? "solid" : "outline"}
        >
          All
        </Button>

        <Button
          onClick={() => handlePrioritySort("asc")}
          variant={prioritySort === "asc" ? "solid" : "outline"}
        >
          Priority Asc
        </Button>
        <Button
          onClick={() => handlePrioritySort("desc")}
          variant={prioritySort === "desc" ? "solid" : "outline"}
        >
          Priority Desc
        </Button>
      </Flex>

      <Flex justify="center" p={4}>
        <Box>
          <strong>Total Tasks:</strong> {totalTasks}
        </Box>
        <Box ml={4}>
          <strong>Completed Tasks:</strong> {completedTasks}
        </Box>
        <Box ml={4}>
          <strong>Overdue Tasks:</strong> {overdueTasks}
        </Box>
        <Box ml={4}>
          <strong>Completion Percentage:</strong> {completionPercentage}%
        </Box>
      </Flex>

      {filteredAndSortedTasks.length > 0 && (
        <Flex justify="center" p={4}>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4}>
            {filteredAndSortedTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
            ))}
          </SimpleGrid>
        </Flex>
      )}
    </div>
  );
};
