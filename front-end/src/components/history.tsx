import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { LuHistory } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

interface HistoryProps {
  onClose?: () => void;
}

const History: React.FC<HistoryProps> = ({ onClose = () => {} }) => {
  const navigate = useNavigate();

  const handleClick = (version?: number) => {
    navigate(version ? `/files/1/versions/${version}` : "/files/1");
    onClose();
  }

  return (
    <>
      <Divider />
      <Button onClick={() => handleClick()} h="auto" py="1" w="full" borderRadius="0" justifyContent="start" alignContent="start" variant="ghost" _hover={{ background: "gallery.100" }} _active={{ background: "gallery.200" }}>
        <Flex direction="column" align="start" my="3" gap="1">
          <Text fontSize="md" fontWeight="bold">Mais recente</Text>
          <Text fontSize="sm" fontWeight="normal">Versão atual</Text>
        </Flex>
      </Button>
      <Divider />
      <Button onClick={() => handleClick(1)} h="auto" py="1" w="full" borderRadius="0" justifyContent="start" alignContent="start" variant="ghost" _hover={{ background: "gallery.100" }} _active={{ background: "gallery.200" }}>
        <Flex direction="column" align="start" my="3" gap="1">
          <Text fontSize="md" fontWeight="bold">19/04/2024, 11:58</Text>
          <Text fontSize="sm" fontWeight="normal">Uanderson Ricardo</Text>
        </Flex>
      </Button>
      <Divider />
    </>
  );
}

export default History;
