import { Box, Button, Code, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, IconButton, Tag, Text, Tooltip, useDisclosure } from "@chakra-ui/react";
import React from "react";
import Content from "./content";
import History from "./history";
import { translateType } from "../lib/translate";
import { LuEar, LuHistory, LuMessageSquare } from "react-icons/lu";
import { speak } from "../services/tts";

interface ShowFileProps {
  onToggleEditing: () => void;
  version?: boolean;
  file: FilesShowResponse;
}

const ShowFile: React.FC<ShowFileProps> = ({ onToggleEditing, file, version }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const hear = async () => {
    const synth = window.speechSynthesis;
    if (synth.speaking) {
      synth.cancel();
      return;
    }

    speak(file.current_version?.content || "Essa é uma audiodescrição do conteúdo.");
  }

  return (
    <>
      <Flex gap="2">
        <Tooltip hasArrow label="Audiodescrição" aria-label="Audiodescrição">
          <IconButton aria-label="Audiodescrição" bg="gallery.200" color="black" _hover={{ bg: "gallery.300" }} _active={{ bg: "gallery.400" }} onClick={hear} icon={<LuEar />} />
        </Tooltip>
        <Tooltip hasArrow label="Versões" aria-label="Versões">
          <IconButton aria-label="Versões" bg="gallery.200" color="black" _hover={{ bg: "gallery.300" }} _active={{ bg: "gallery.400" }} onClick={onOpen} icon={<LuHistory />} />
        </Tooltip>
        {!version && (
          <Button onClick={onToggleEditing} bg="deep-cove.950" color="white" _hover={{ bg: "deep-cove.900" }} _active={{ bg: "deep-cove.800" }}>
            Revisar
          </Button>
        )}
      </Flex>
      <Flex w="full" gap="8" mb="8">
        <Flex w="full" direction="column" flex="6" minH="65vh">
          <Content file={file} />
        </Flex>
        <Flex direction="column" flex="4" gap="1">
          <Flex fontSize="2xl" fontWeight="bold" display="inline">
            {version && <Code fontSize="2xl" fontWeight="bold" display="inline" textDecoration="line-through" colorScheme='red' children="Antigo " />}
            {file.current_version?.title || "Título"}
          </Flex>
          <Box fontSize="md" mt="-1">{translateType(file.type)}</Box>
          <Box fontSize="md" mt="4">
            <b>Data:&nbsp;</b>
            {version && <Code fontSize="md" display="inline" colorScheme='green' children="Anos 1900" />}
            {!version && (file.current_version?.date || "Data")}
          </Box>
          <Box fontSize="md">
            <b>Âmbito e conteúdo:&nbsp;</b>
            {version && <Code fontSize="md" display="inline" textDecoration="line-through" colorScheme='red' children="Sobre o " />}
            {file.current_version?.content || "Âmbito e conteúdo"}
            {version && <Code fontSize="md" display="inline" colorScheme='green' children="É um documento de grande importância histórica." />}
          </Box>
          <Box fontSize="md">
            <b>Pontos de acesso e indexação de assuntos:&nbsp;</b>
            {["Mapa", "Brasil"].join(", ") || "Pontos de acesso e indexação de assuntos"}
          </Box>
          <Box fontSize="md" display="inline-flex" gap="1" flexWrap="wrap">
            <b>Marcadores/tags:&nbsp;</b>
            {[{ id: 1, text: "Cartografia" }].map(tag => (
              <Tag key={tag.id} colorScheme="green">{tag.text}</Tag>
            )) || "Tags"}
          </Box>
        </Flex>
      </Flex>
      <Drawer isOpen={isOpen} size="xs" placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Versões</DrawerHeader>

          <DrawerBody p="0">
            <History onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ShowFile;
