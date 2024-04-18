import React from "react";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";

const Layout: React.FC = () => {
  return (
    <Flex minH="full" w="full" direction="column" overflow="auto">
      <Header />
      <Flex as="main" w="full" flex="1" direction="column" overflow="auto">
        <Outlet />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
