import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";
// import { FaRegHeart } from "react-icons/fa6";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../contexts/auth";
// import { useQuery } from "react-query";

// import api from "../config/api";

const Home: React.FC = () => {
  // const { user } = useContext(AuthContext);

  // const { data } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: async () => {
  //     return api.get("/products/categories").then((response) => response.data);
  //   },
  // });

  return (
    <Flex direction="column" w="full" minH="full" overflow="auto">
      <Button
        variant="ghost"
        leftIcon={<FiMapPin />}
        w="full"
        justifyContent="start"
        py="6"
        px="4"
        bgColor="white"
        _hover={{ bg: "secondary.100", color: "white" }}
        _active={{ bg: "secondary.110", color: "white" }}
        borderRadius={0}
      >
        Pernambuco
      </Button>
    </Flex>
  );
};

export default Home;
