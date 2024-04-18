import React, { useContext, useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  useColorModeValue,
  useDisclosure,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { HiX, HiChevronDown } from "react-icons/hi";
import { FaBars, FaMagnifyingGlass, FaRegBell, FaRegComment } from "react-icons/fa6";
import { RiChat3Line, RiFunctionLine, RiNotification2Line, RiSuitcaseLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";

import logo from "../assets/react.svg";
import { AuthContext } from "../contexts/auth";
import api from "../config/api";

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={2}>
      {NAV_ITEMS.map((navItem) => (
        <RouterLink to={navItem.href ?? "#"} key={navItem.label}>
          <IconButton
            icon={<navItem.icon />}
            fontSize="2xl"
            w="12"
            h="12"
            color="neutral.130"
            variant={"ghost"}
            aria-label={"Notificações"}
            _hover={{
              color: "secondary.100",
            }}
            _active={{
              color: "secondary.100",
            }}
          />
        </RouterLink>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
          <RouterLink to={href ?? "#"}>{label}</RouterLink>
        </Text>
        {children && (
          <Icon
            as={HiChevronDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  icon: React.ElementType;
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    icon: RiSuitcaseLine,
    label: "Plano Profissional",
    href: "/profissional",
  },
  {
    icon: RiFunctionLine,
    label: "Meus Anúncios",
    href: "/anuncios",
  },
  {
    icon: RiChat3Line,
    label: "Chats",
    href: "/chats",
  },
  {
    icon: RiNotification2Line,
    label: "Notificações",
    href: "/notificacoes",
  },
];

const Header: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const { isOpen, onToggle } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [isTooltipOpen, setIsTooltipOpen] = useState(true);
  const navigate = useNavigate();
  const toast = useToast();

  useEffect(() => {
    setTimeout(() => {
      setIsTooltipOpen(false);
    }, 6000);
  }, []);

  useEffect(() => {
    if (fileRef.current) {
      fileRef.current.addEventListener("change", () => {
        // @ts-ignore
        const file = fileRef.current?.files[0] as Blob;

        if (!file) return;

        setLoading(true);

        const formData = new FormData();
        formData.append("file", file);

        api
          .post("/user/upload", formData)
          .then((res) => {
            const url = res.data.url.split("/").pop();
            setInput("");
            navigate("/search/i/" + url);
          })
          .catch(() => {
            toast({
              title: "Erro",
              description: "Erro ao enviar imagem",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          })
          .finally(() => {
            setLoading(false);
          });
      });
    }
  }, []);

  const onSearch = () => {
    if (!input) return;

    navigate("/search/q/" + input);
  };

  return (
    <Box position="sticky">
      <Flex
        bg={"white"}
        color={"gray.600"}
        minH={"60px"}
        px={{ base: 4 }}
        align={"center"}
        columnGap="4"
      >
        <Flex ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            // onClick={onToggle}
            icon={isOpen ? <HiX /> : <FaBars />}
            w="10"
            h="10"
            fontSize="xl"
            color="neutral.130"
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            _hover={{
              color: "secondary.100",
            }}
            _active={{
              color: "secondary.100",
            }}
          />
        </Flex>

        <Flex justify={{ base: "start", md: "start" }} align="center">
          <RouterLink to={"/"}>
            <Image src={logo} h="12" />
          </RouterLink>
        </Flex>

        <Stack
          display={{ base: "flex", md: "none" }}
          justify={"flex-end"}
          direction={"row"}
          spacing={2}
          ml="auto"
          align="center"
        >
          <IconButton
            icon={<FaRegComment />}
            fontSize="2xl"
            w="12"
            h="12"
            color="neutral.130"
            variant={"ghost"}
            aria-label={"Chat"}
            _hover={{
              color: "secondary.100",
            }}
            _active={{
              color: "secondary.100",
            }}
            mx="-2"
            onClick={() => navigate("/chats/1")}
          />
          <IconButton
            icon={<FaRegBell />}
            fontSize="2xl"
            w="12"
            h="12"
            color="neutral.130"
            variant={"ghost"}
            aria-label={"Notificações"}
            _hover={{
              color: "secondary.100",
            }}
            _active={{
              color: "secondary.100",
            }}
            mx="-2"
          />
          <Button
            variant="solid"
            bg="primary.100"
            size="sm"
            _hover={{
              bg: "primary.110",
            }}
            _active={{
              bg: "primary.110",
            }}
            borderRadius="full"
            px="4"
          >
            Anunciar
          </Button>
        </Stack>
      </Flex>
      <Flex
        bg={"white"}
        color={"gray.600"}
        minH={"60px"}
        pb={{ base: 4 }}
        px={{ base: 4, md: 20 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"neutral.90"}
        align={"center"}
        columnGap="4"
      >
        <Flex flex={{ base: 1, md: "auto" }}>
          <InputGroup borderColor="neutral.90" size="lg">
            <Input
              placeholder="Buscar"
              pr="20"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <InputRightElement w="20">
              <IconButton
                icon={<FaMagnifyingGlass />}
                fontSize="xl"
                w="8"
                h="8"
                color="neutral.130"
                variant={"ghost"}
                aria-label={"Buscar"}
                borderRadius="full"
                _hover={{
                  bgColor: "neutral.90",
                }}
                _active={{
                  bgColor: "neutral.90",
                }}
                minWidth={0}
                mr="1"
                onClick={onSearch}
              />
              <Tooltip
                label="Experimente nossa nova pesquisa por Inteligência Artificial! Tire a foto do que você procura!"
                placement="bottom-start"
                isOpen={isTooltipOpen}
                bg="neutral.130"
                hasArrow
                maxW="240px"
                isDisabled
                p="3"
                borderRadius="lg"
              >
                <IconButton
                  icon={<BsStars />}
                  fontSize="xl"
                  w="8"
                  h="8"
                  color="secondary.100"
                  variant={"ghost"}
                  aria-label={"Buscar"}
                  borderRadius="full"
                  _hover={{
                    bgColor: "neutral.90",
                  }}
                  _active={{
                    bgColor: "neutral.90",
                  }}
                  minWidth={0}
                  onClick={() => {
                    fileRef.current?.click();
                  }}
                  isLoading={loading}
                />
              </Tooltip>
            </InputRightElement>
            <Input type="file" display="none" ref={fileRef} />
          </InputGroup>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Header;
