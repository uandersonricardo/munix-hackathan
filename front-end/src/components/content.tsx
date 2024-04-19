import { Box, Flex, Tag, Text } from "@chakra-ui/react";
import React from "react";

interface ContentProps {
  file: any;
}

const Content: React.FC<ContentProps> = ({ file }) => {
  if (file.type === "image") {
    return (
      <img src={file.url} alt={file.name} />
    );
  }
};

export default Content;
