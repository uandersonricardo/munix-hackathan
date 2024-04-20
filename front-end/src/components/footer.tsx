import React from "react";
import { Divider, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <>
      <Text w="full" textAlign="center" fontSize="sm" bg="gallery.100" px="4" py="12" fontWeight="bold">
        © Sistema de Informações do Arquivo Nacional - SIAN - Praça da República, 173 - Centro, Rio de Janeiro - RJ, 20211-350
      </Text>
    </>
  );
};

export default Footer;
