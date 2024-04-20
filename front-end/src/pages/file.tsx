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
  Spinner,
  Tooltip,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { Navigate, useParams } from "react-router-dom";

import { AuthContext } from "../contexts/auth";
import logo from "../assets/react.svg";
import ShowFile from "../components/show-file";
import EditFile from "../components/edit-file";
import { useQuery } from "react-query";
import { findFileRequest } from "../requests/files";

import bookmark from "../assets/bookmark.png";

interface FileProps {
}

const File: React.FC<FileProps> = () => {
  const [loading, setLoading] = useState(false);
  const { isOpen: isEditing, onToggle: onToggleEditing } = useDisclosure();
  const toast = useToast();
  const inputRef = useRef<HTMLInputElement>(null);
  const { id, versionId } = useParams();

  const { data: response, isLoading } = useQuery(["file", id], async () => await findFileRequest(parseInt(id || "1")), {
    enabled: !!id,
  });

  return (
    <Flex position="relative" h="full" bg="white" p="8">
      <Flex
        w="full"
        maxW="container.xl"
        mx="auto"
        direction="column"
        zIndex="10"
        align="end"
        gap="8"
        position="relative"
      >
        {!isLoading && (
          <Tooltip hasArrow mx="12" label="As informações desse documento ainda não foram verificadas!" aria-label="As informações desse documento ainda não foram verificadas!">
            <Image src={bookmark} alt="bookmark" h="24" position="absolute" top="2" left="4" zIndex="100" ml="-2px" mt="16" />
          </Tooltip>
        )}
        {isLoading ? (
          <Flex w="full" justify="center" p="20">
            <Spinner size="lg" color="deep-cove.950" /> 
          </Flex>
        ): isEditing ? (
          <EditFile onToggleEditing={onToggleEditing} file={response?.data as FilesShowResponse} />
        ):(
          <ShowFile onToggleEditing={onToggleEditing} file={response?.data as FilesShowResponse} version={!!versionId} />
        )}
      </Flex>
    </Flex>
  );
};

export default File;
