import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Input, Tag, Text, Textarea, Tooltip, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Content from "./content";
import Comments from "./comments";
import { translateType } from "../lib/translate";
import { LuMessageSquare, LuSparkles } from "react-icons/lu";
import ModalAI from "./modal-ai";

interface EditFileProps {
  onToggleEditing: () => void;
  file: FilesShowResponse;
}

const EditFile: React.FC<EditFileProps> = ({ onToggleEditing, file }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = React.useState<string>(file.current_version?.title || "Título");
  const [date, setDate] = React.useState<string>(file.current_version?.date || "Data");
  const [content, setContent] = React.useState<string>(file.current_version?.content || "Âmbito e conteúdo");
  const [accessPoints, setAccessPoints] = React.useState<string>(["Mapa", "Brasil"].join(", ") || "Pontos de acesso e indexação de assuntos");
  const [tags, setTags] = React.useState<string[]>(["Cartografia"]);


  const onCloseFill = (fields?: FileFields) => {
    if (fields) {
      setTitle(fields.title || "Título");
      setDate(fields.date || "Data");
      setContent(fields.content || "Âmbito e conteúdo");
      setAccessPoints(fields.accessPoints.join(", ") || "Pontos de acesso e indexação de assuntos");
      setTags(fields.tags || "Tags");
    }

    onClose();
  };

  return (
    <>
      <Flex gap="2">
        <Tooltip hasArrow label="Preencher com IA" aria-label="Preencher com IA">
          <IconButton aria-label="Preencher com IA" bg="gallery.200" color="black" _hover={{ bg: "gallery.300" }} _active={{ bg: "gallery.400" }} onClick={onOpen} icon={<LuSparkles />} />
        </Tooltip>
        <Button onClick={onToggleEditing} bg="deep-cove.950" color="white" _hover={{ bg: "deep-cove.900" }} _active={{ bg: "deep-cove.800" }}>
          Salvar
        </Button>
      </Flex>
      <Flex w="full" gap="8" mb="8">
        <Flex w="full" direction="column" flex="6">
          <Content file={file} />
        </Flex>
        <Flex direction="column" flex="4" gap="2">
          <Textarea h="40" placeholder="Título" fontSize="2xl" fontWeight="bold" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Box fontSize="md" mt="-1">{translateType(file.type)}</Box>
          <Box fontSize="md" mt="4">
            <b>Data:&nbsp;</b>
            <Input placeholder="Data" value={date} onChange={(e) => setDate(e.target.value)} />
          </Box>
          <Box fontSize="md">
            <b>Âmbito e conteúdo:&nbsp;</b>
            <Textarea noOfLines={10} h="60" placeholder="Âmbito e conteúdo"  value={content} onChange={(e) => setContent(e.target.value)} />
          </Box>
          <Box fontSize="md">
            <b>Pontos de acesso e indexação de assuntos:&nbsp;</b>
            <Input placeholder="Pontos de acesso e indexação de assuntos" value={accessPoints} onChange={(e) => setAccessPoints(e.target.value)} />
          </Box>
          <Box fontSize="md" display="inline-flex" gap="1" flexWrap="wrap">
            <b>Marcadores/tags:&nbsp;</b>
            {tags.map(tag => (
              <Tag key={tag} colorScheme="green">{tag}</Tag>
            ))}
            <Tag colorScheme="gray">Adicionar</Tag>
          </Box>
        </Flex>
      </Flex>
      <Flex direction="column" justify="flex-start" w="full">
        <Heading size="lg" mt="4" mb="4">Discussão</Heading>
        <Comments />
      </Flex>
      {/* <Drawer isOpen={isOpen} size="sm" placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Discussão</DrawerHeader>

          <DrawerBody py="0">
            <Comments />
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
      <ModalAI isOpen={isOpen} onClose={onCloseFill} />
    </>
  );
};

export default EditFile;
