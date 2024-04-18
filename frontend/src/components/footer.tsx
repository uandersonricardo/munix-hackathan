import React from "react";
import { Divider, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <>
      <Divider my="4" borderColor="neutral.90" />
      <Text w="full" textAlign="center" fontSize="sm" color="neutral.130" px="4" mb="4">
        © Sistema de Informações do Arquivo Nacional - SIAN - Praça da República, 173 - Centro, Rio de Janeiro - RJ, 20211-350
      </Text>
    </>
  );
};

export default Footer;
