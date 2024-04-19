import React, { useContext, useRef, useState } from "react";
import {
  Container,
  Stack,
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useDisclosure,
  useToast,
  Image,
  Text,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Navigate, useParams } from "react-router-dom";

import { AuthContext } from "../contexts/auth";
import logo from "../assets/react.svg";
import ShowFile from "../components/show-file";
import EditFile from "../components/edit-file";

interface FileProps {
}

const File: React.FC<FileProps> = () => {
  const [loading, setLoading] = useState(false);
  const { isOpen: isEditing, onToggle: onToggleEditing } = useDisclosure();
  const toast = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const { id, versionId } = useParams();

  return (
    <Flex h="full" bg="white" p="8">
      <Flex
        w="full"
        maxW="container.xl"
        mx="auto"
        direction="column"
        zIndex="10"
        align="end"
        gap="8"
      >
        {isEditing ? (
          <EditFile onToggleEditing={onToggleEditing} />
        ):(
          <ShowFile onToggleEditing={onToggleEditing} version={!!versionId} />
        )}
      </Flex>
    </Flex>
  );
};

export default File;
