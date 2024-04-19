import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Card: React.FC = () => {
  return (
    <Link to="/files/1">
      <Flex p="4" w="40" bg="white" borderRadius="lg" direction="column">
        <Text fontSize="xl" fontWeight="bold">Card</Text>
        <Image src="https://via.placeholder.com/150" my="2" maxH="20"  borderRadius="4" alt="Placeholder" />
        <Text fontSize="sm">Título</Text>
        <Text fontSize="sm">Data</Text>
        <Text fontSize="sm">Conteúdo</Text>
        <Text fontSize="sm">Indexação</Text>
      </Flex>
    </Link>
  )
};

export default Card;
