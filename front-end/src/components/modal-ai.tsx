import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea } from "@chakra-ui/react";
import React from "react";
import { chatRequest } from "../requests/ai";

interface ModalAIProps {
  isOpen: boolean;
  onClose: (fields?: FileFields) => void;
}

const ModalAI: React.FC<ModalAIProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const askAI = async () => {
    setLoading(true);
    const res = await chatRequest({ id: 1, question: input });
    
    console.log(res)
    
    setLoading(false);
    setInput("");
    onClose(res?.data || {} as FileFields);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Preencha com Inteligência Artificial</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea placeholder="Descreva o arquivo" bg="gallery.100" height="40" w="full" resize="none" value={input} onChange={(e) => setInput(e.target.value)} />
        </ModalBody>

        <ModalFooter>
          <Button bg="deep-cove.950" color="white" _hover={{ bg: "deep-cove.900" }} mr={3} onClick={askAI} isLoading={loading}>
            Preencher
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalAI;
