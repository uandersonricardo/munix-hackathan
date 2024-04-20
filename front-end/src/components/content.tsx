import { Box, Flex, Tag, Text } from "@chakra-ui/react";
import React from "react";

interface ContentProps {
  file: FilesShowResponse;
}

const Content: React.FC<ContentProps> = ({ file }) => {
  if (file.type === "image") {
    return (
      <img src={file.url} alt={file.url} />
    );
  }

  return <embed src={file.url} type="application/pdf" width="100%" height="100%" />;
};

export default Content;
