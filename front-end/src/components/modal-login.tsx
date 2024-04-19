import React, { useContext, useState } from "react";
import { Avatar, Box, Button, Divider, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

import { AuthContext } from "../contexts/auth";

interface ModalLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalLogin: React.FC<ModalLoginProps> = ({ isOpen, onClose }) => {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (id: number) => {
    setLoading(true);
    await login(id);
    setLoading(false);
    onClose();
  }; 

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Entrar</ModalHeader>
        <ModalCloseButton />
        <ModalBody p="0">
          <Divider />
          <Button h="auto" py="1" w="full" justifyContent="start" alignContent="start" variant="ghost" _hover={{ background: "gallery.100" }} _active={{ background: "gallery.200" }} disabled={loading} onClick={() => handleLogin(1)}>
            <Avatar size="sm" name="Marina Paixão" />
            <Flex ml="3" direction="column" align="start" my="3">
              <Text fontSize="md" fontWeight="bold">Marina Paixão</Text>
              <Text fontSize="sm" fontWeight="normal">marina.paixao@exemplo.com.br</Text>
            </Flex>
          </Button>
          <Divider />
          <Button h="auto" py="1" w="full" justifyContent="start" alignContent="start" variant="ghost" _hover={{ background: "gallery.100" }} _active={{ background: "gallery.200" }} disabled={loading} onClick={() => handleLogin(2)}>
            <Avatar size="sm" name="Natalie Chaves" />
            <Flex ml="3" direction="column" align="start" my="3">
              <Text fontSize="md" fontWeight="bold">Natalie Chaves</Text>
              <Text fontSize="sm" fontWeight="normal">natalie.chaves@exemplo.com.br</Text>
            </Flex>
          </Button>
          <Divider />
          <Button h="auto" py="1" w="full" justifyContent="start" alignContent="start" variant="ghost" _hover={{ background: "gallery.100" }} _active={{ background: "gallery.200" }} disabled={loading} onClick={() => handleLogin(3)}>
            <Avatar size="sm" name="Uanderson Ricardo" />
            <Flex ml="3" direction="column" align="start" my="3">
              <Text fontSize="md" fontWeight="bold">Uanderson Ricardo</Text>
              <Text fontSize="sm" fontWeight="normal">uanderson.ricardo@exemplo.com.br</Text>
            </Flex>
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalLogin;
