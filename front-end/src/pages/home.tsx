import React from "react";
import { Box, Button, Flex, Heading, IconButton, Image, Input, Stack, StackDivider, Text } from "@chakra-ui/react";
import { FiMapPin } from "react-icons/fi";
// import { FaRegHeart } from "react-icons/fa6";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../contexts/auth";
// import { useQuery } from "react-query";

// import api from "../config/api";
import { LuCamera, LuFileText, LuGlobe2, LuVideo, LuVolume2 } from "react-icons/lu";
import Card from "../components/card";
import Slider from "../components/slider";
import { recognize } from "../services/speech-recognition";
import { speak } from "../services/tts";
import Search from "../components/search";

import bg from "../assets/bg.png";
import footer from "../assets/footer.png";
import predio from "../assets/predio.png";

const Home: React.FC = () => {
  // const { user } = useContext(AuthContext);

  // const { data } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: async () => {
  //     return api.get("/products/categories").then((response) => response.data);
  //   },
  // });

  const testRecognition = async () => {
    console.log(await recognize());
  }

  const testSpeak = async () => {
    await speak("Olá, mundo!");
  }

  return (
    <Flex direction="column" w="full" minH="full" overflow="auto">
      <Flex bgImage={bg} w="full" px="16" pt="48" pb="48" position="relative">
        <Flex
          w="full"
          maxW="container.xl"
          mx="auto"
          direction="row"
          zIndex="10"
          gap="8"
        >
          <Flex flex="1" direction="column" align="start" justify="center">
            <Heading as="h1" fontSize="3xl" textAlign="left" mb="2" color="white" pr="32">
              Contribua com o Arquivo Nacional e seja um Informante Histórico
            </Heading>
            <Text color="las-palmas.500" textAlign="left" mb="6">
              Colabore com a descrição de arquivos e ganhe benefícios!
            </Text>
            <Button
              bg="las-palmas.500"
              size="lg"
              color="deep-cove.950"
              _hover={{
                bg: "las-palmas.600",
              }}
              _active={{
                bg: "las-palmas.700",
              }}
              onClick={testRecognition}
            >
              Comece já
            </Button>
          </Flex>
          <Flex flex="1" direction="column" align="center" justify="center">
            <Flex bg="white" p="4" borderRadius="lg" w="full" direction="column" gap="6">
              <Stack direction="row" align="center" justify="center" spacing="4" px="2" divider={<StackDivider />}>
                <IconButton
                  aria-label="Texto"
                  icon={<LuFileText />}
                  color="deep-cove.950"
                  fontSize="2xl"
                  variant="ghost"
                  flex="1"
                  _hover={{
                    color: "deep-cove.900",
                  }}
                  _active={{
                    color: "deep-cove.800",
                  }}
                />
                <IconButton
                  aria-label="Vídeo"
                  icon={<LuVideo />}
                  color="deep-cove.950"
                  fontSize="2xl"
                  variant="ghost"
                  flex="1"
                  _hover={{
                    color: "deep-cove.900",
                  }}
                  _active={{
                    color: "deep-cove.800",
                  }}
                />
                <IconButton
                  aria-label="Localização"
                  icon={<LuGlobe2 />}
                  color="deep-cove.950"
                  fontSize="2xl"
                  variant="ghost"
                  flex="1"
                  _hover={{
                    color: "deep-cove.900",
                  }}
                  _active={{
                    color: "deep-cove.800",
                  }}
                />
                <IconButton
                  aria-label="Áudio"
                  icon={<LuVolume2 />}
                  color="deep-cove.950"
                  fontSize="2xl"
                  variant="ghost"
                  flex="1"
                  _hover={{
                    color: "deep-cove.900",
                  }}
                  _active={{
                    color: "deep-cove.800",
                  }}
                />
                <IconButton
                  aria-label="Foto"
                  icon={<LuCamera />}
                  color="deep-cove.950"
                  fontSize="2xl"
                  variant="ghost"
                  flex="1"
                  _hover={{
                    color: "deep-cove.900",
                  }}
                  _active={{
                    color: "deep-cove.800",
                  }}
                />
              </Stack>
              <Flex direction="column" w="full" gap="3">
                <Input placeholder="Título do arquivo" bg="gallery.100" border="0" />
                <Flex align="center" gap="3">
                  <Input placeholder="Data do arquivo" bg="gallery.100" border="0" />
                  <Input placeholder="Conteúdo" bg="gallery.100" border="0" />
                </Flex>
                <Input placeholder="Indexação" bg="gallery.100" border="0" />
              </Flex>
              <Button
                bg="deep-cove.950"
                size="md"
                color="white"
                _hover={{
                  bg: "deep-cove.900",
                }}
                _active={{
                  bg: "deep-cove.800",
                }}
                alignSelf="flex-end"
                px="8"
                onClick={testSpeak}
              >
                Pesquisar
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Box w="full" h="full" position="absolute" zIndex="0" left="0" top="0" bgImage="linear-gradient(#0B144966, #0B1449 100%)" />
      </Flex>
      <Flex w="full" px="16" pt="48" pb="0" position="relative" bg="white">
        <Flex position="absolute" h="48" top="-24" w="full" mx="-16" align="center" direction="column">
          <Flex w="xl">
            <Slider />
          </Flex>
          <Box mt="8">
            <Button bg="deep-cove.950" color="white" size="lg" px="12" _hover={{ bg: "deep-cove.900" }}>
              Veja mais
            </Button>
          </Box>
        </Flex>
        <Flex w="full" maxW="container.xl" mx="auto" pt="8">
          <Search />
        </Flex>
      </Flex>
      <Image src={footer} alt="footer" w="full" />
      <Flex py="12" px="16" bg="claret.900">
        <Image src={predio} alt="predio" h="20" />
      </Flex>
    </Flex>
  );
};

export default Home;
