import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  Stack,
  Text,
} from "@chakra-ui/react";

const AddCollaborators = ({ isOpen, onClose, users, onAddCollaborator }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearch = () => {
    // Filter users based on the search query
    const filtered = users.filter((user) =>
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Collaborators</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <Input
              placeholder="Enter email to search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button colorScheme="blue" onClick={handleSearch}>
              Search
            </Button>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <Stack
                  key={user._id}
                  direction="row"
                  justify="space-between"
                  align="center"
                >
                  <Text>{user.email}</Text>
                  <Button onClick={() => onAddCollaborator(user._id)}>
                    Add
                  </Button>
                </Stack>
              ))
            ) : (
              <Text>No matching users found.</Text>
            )}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddCollaborators;
