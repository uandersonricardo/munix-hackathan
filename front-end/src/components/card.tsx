import { Flex, Image, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Card: React.FC = () => {
  return (
    <Link to="/files/1">
      <Flex p="4" w="full" bg="claret.900" color="white" borderRadius="lg" direction="column">
        <Image src="https://i.superesportes.com.br/knC7Ahi3r3KWZS7eKemAUDHZGjY=/0x800/smart/imgsapp.mg.superesportes.com.br/app/foto_126510467054/2020/12/23/12014/20201223152520805199o.jpg" mb="2" w="full"  borderRadius="4" alt="Placeholder" />
        <Text fontSize="md" fontWeight="bold">Foto oficial do brasileirão</Text>
        <Text fontSize="sm"><b>Data:</b> 12/05/1976</Text>
        <Text fontSize="sm"><b>Conteúdo:</b> Fotografia pré jogo, amistoso contra o Cruzeiro</Text>
        <Text fontSize="sm"><b>Marcadores/tags:</b> Esportes</Text>
        <Flex gap="1" mt="1">
          <Tag bg="las-palmas.500" color="deep-cove.950">Fotografia</Tag>
          <Tag bg="las-palmas.500" color="deep-cove.950">Futebol</Tag>
        </Flex>
      </Flex>
    </Link>
  )
};

export default Card;
