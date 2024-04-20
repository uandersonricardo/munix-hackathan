import { Avatar, Box, Button, Card, CardBody, CardHeader, Divider, Flex, Heading, Text, Textarea } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

const messages = [
  {
      from: "Marina Paixão",
      label: "Amante da História",
      to: "",
      from_address: "",
      to_address: "",
      message: "Alguém sabe me dizer em qual categoria se encaixa este documento histórico que encontrei?",
  },
  {
      from: "Natalie Chaves",
      label: "Guardiã da Memória",
      to: "a",
      from_address: "",
      to_address: "",
      message: "Que tal consultarmos um especialista em documentos históricos para ter uma opinião definitiva?",
  },
  {
      from: "Marina Paixão",
      label: "Amante da História",
      to: "b",
      from_address: "",
      to_address: "",
      message: "Ótima ideia! Vou procurar um especialista e depois compartilho o resultado com vocês.",
  },
  {
      from: "Uanderson Ricardo",
      label: "Explorador de Arquivos",
      to: "c",
      from_address: "",
      to_address: "",
      message: "Eu conheço um grande estudioso de documentos históricos e com certeza poderá nos dar uma resposta precisa.",
  }
]

const mapToLabel: Record<number, string> = {
  1: "Amante da História",
  2: "Guardiã da Memória",
  3: "Explorador de Arquivos",
};

interface CommentsProps {
  onClose?: () => void;
}

const Comments: React.FC<CommentsProps> = ({ onClose = () => {} }) => {
  const navigate = useNavigate();
  const [input, setInput] = React.useState("")
  const { user } = useContext(AuthContext);

  const handleClick = (version?: number) => {
    navigate(version ? `/files/1/versions/${version}` : "/files/1");
    onClose();
  }

  const sendMessage = () => {
    messages.push({
      from: user?.name || "",
      label: mapToLabel[user?.id || 1],
      to: "c",
      from_address: "",
      to_address: "",
      message: input,
    })
    setInput("")
  }

  return (
    <>
      {messages.map((message) => (
        <Box mb="4">
          <Card shadow="none" border="1px" borderColor="gallery.100" borderRadius="lg">
            <CardHeader p="3">
              <Flex gap='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar size="sm" name={message.from} />

                  <Box>
                    <Text fontWeight="bold" fontSize='sm'>{message.from}</Text>
                    <Text fontSize="xs">{message.label}</Text>
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody px="3" pb="3" pt="0">
              <Text>{message.message}</Text>
            </CardBody>
          </Card>
        </Box>
      ))}
      <Flex gap='4' direction="column" align="end">
        <Textarea placeholder="Digite uma mensagem" p="4" w="full" h="36" _placeholder={{ color: "gallery.600" }} resize="none" value={input} bg="gallery.100" border="0" onChange={(e) => setInput(e.target.value)} />
        <Button onClick={() => sendMessage()} px="6" bg="deep-cove.950" color="white" _hover={{ background: "deep-cove.900" }}>Enviar</Button>
      </Flex>
    </>
  );
}

export default Comments;
