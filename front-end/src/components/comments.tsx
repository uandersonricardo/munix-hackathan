import { Avatar, Box, Button, Card, CardBody, CardHeader, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const messages = [
  {
      from: "",
      to: "",
      from_address: "",
      to_address: "",
      message: "View a summary of all your customers over the last month.",
  },
  {
      from: "",
      to: "a",
      from_address: "",
      to_address: "",
      message: "I'm sorry, I can't do that.",
  }
]

interface CommentsProps {
  onClose?: () => void;
}

const Comments: React.FC<CommentsProps> = ({ onClose = () => {} }) => {
  const navigate = useNavigate();

  const handleClick = (version?: number) => {
    navigate(version ? `/files/1/versions/${version}` : "/files/1");
    onClose();
  }

  return (
    <>
      {messages.map((message) => (
        <Box className={message.to == "" ? "message-received" : "message-sent"} mb="4">
          <Card shadow="none" border="1px" borderColor="gallery.100" borderRadius="lg">
            <CardHeader p="3">
              <Flex gap='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  <Avatar size="sm" name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                  <Box>
                    <Text fontWeight="bold" fontSize='sm'>Segun Adebayo</Text>
                    <Text fontSize="xs">Creator, Chakra UI</Text>
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
    </>
  );
}

export default Comments;
