import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Input, Tag, Text, Textarea, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Content from "./content";
import Comments from "./comments";

interface EditFileProps {
  onToggleEditing: () => void;
}

const EditFile: React.FC<EditFileProps> = ({ onToggleEditing }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex gap="2">
        <Button bg="gallery.200" color="black" _hover={{ bg: "gallery.300" }} _active={{ bg: "gallery.400" }} onClick={onOpen}>
          Discussão
        </Button>
        <Button onClick={onToggleEditing} bg="deep-cove.950" color="white" _hover={{ bg: "deep-cove.900" }} _active={{ bg: "deep-cove.800" }}>
          Voltar
        </Button>
      </Flex>
      <Flex w="full" gap="8">
        <Flex w="full" direction="column" flex="6">
          <Content file={{ type: "image", url: "https://via.placeholder.com/150", name: "Placeholder" }} />
        </Flex>
        <Flex direction="column" flex="4" gap="2">
          <Textarea h="40" placeholder="Título" fontSize="2xl" fontWeight="bold" value="Planta do rocio de Curitiba levantada pelos empregados da linha telegráfica em Curitiba, nos meses de abril e maio de 1882." />
          <Box fontSize="md" mt="-1">Documento cartográfico</Box>
          <Box fontSize="md" mt="4">
            <b>Data:&nbsp;</b>
            <Input placeholder="Data" value="Inicial de 1882" />
          </Box>
          <Box fontSize="md">
            <b>Âmbito e conteúdo:&nbsp;</b>
            <Textarea noOfLines={10} h="60" placeholder="Âmbito e conteúdo" value="Planta cadastral, mostrando o núcleo urbano - sem nomear ruas - e os proprietários da periferia, quando indica os seus nomes. Mostra, delimitando, os terrenos da colônia Argelina (fundada na década de 1860 por franceses de origem argelina), Colônia Abranches (fundada em novembro de 1873 por poloneses e islandeses) e parte da Colônia Dantas (fundada por italianos); trecho longo do rio Barigui; marcos, edificações, igrejas, estação ferroviária, chácara do Barão de Capanema, parte da fazenda Beiro Alto." />
          </Box>
          <Box fontSize="md">
            <b>Pontos de acesso e indexação de assuntos:&nbsp;</b>
            <Input placeholder="Pontos de acesso e indexação de assuntos" value="Colônia Abranches (PR), Colônia Argelina (PR), Colônia Dantas (PR), Colonização, Curitiba (PR)" />
          </Box>
          <Box fontSize="md">
            <b>Tags:&nbsp;</b>
            <Tag colorScheme="green">Curitiba</Tag>&nbsp;
            <Tag colorScheme="green">Planta</Tag>&nbsp;
            <Tag colorScheme="gray">Adicionar</Tag>
          </Box>
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} size="sm" placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Discussão</DrawerHeader>

          <DrawerBody py="0">
            <Comments />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default EditFile;
