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
  Avatar,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { HiX, HiChevronDown } from "react-icons/hi";
import { FaBars, FaMagnifyingGlass, FaRegBell, FaRegComment, FaUser } from "react-icons/fa6";
import { RiChat3Line, RiFunctionLine, RiMoneyDollarBoxFill, RiMoneyDollarCircleFill, RiNotification2Line, RiSuitcaseLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";

import logo from "../assets/logo.svg";
import { AuthContext } from "../contexts/auth";
import api from "../config/api";
import { LuBell, LuCircleDollarSign, LuCoins, LuLandmark, LuMenu, LuMessagesSquare, LuX } from "react-icons/lu";
import ModalLogin from "./modal-login";

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
    label: "Início",
    href: "/profissional",
  },
  {
    icon: RiFunctionLine,
    label: "Coleções",
    href: "/anuncios",
  },
  {
    icon: RiChat3Line,
    label: "Histórias",
    href: "/chats",
  },
  {
    icon: RiNotification2Line,
    label: "Partilhe você também",
    href: "/notificacoes",
  },
];

const Header: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const { isOpen, onToggle } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const { isOpen: isOpenModal, onClose: onCloseModal, onOpen: onOpenModal } = useDisclosure();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsTooltipOpen(false);
  //   }, 6000);
  // }, []);

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
        bg={"las-palmas.500"}
        color={"gray.600"}
        minH={"60px"}
        px={{ base: 4 }}
        align={"center"}
        columnGap="4"
      >
        <Flex ml={{ base: -2 }} display={{ base: "flex", md: "flex" }}>
          <IconButton
            // onClick={onToggle}
            icon={isOpen ? <LuX /> : <LuMenu />}
            w="10"
            h="10"
            fontSize="xl"
            color="black"
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            _hover={{
              color: "deep-cove.900",
            }}
            _active={{
              color: "deep-cove.800",
            }}
          />
        </Flex>

        <Flex justify={{ base: "start", md: "start" }} align="center" flexShrink={0}>
          <RouterLink to={"/"}>
            <Image src={logo} h="10" />
          </RouterLink>
        </Flex>

        <Stack
          display={{ base: "flex", md: "flex" }}
          flex={1}
          direction={"row"}
          spacing={3}
          ml="3"
          align="center"
        >
          {NAV_ITEMS.map((navItem, index) => (
            <React.Fragment key={index}>
              <Box borderLeftWidth={1} h="8" borderColor="#ACACAC32" />
              <RouterLink to={navItem.href ?? "#"} key={navItem.label}>
                <Text fontWeight={600} color="black" _hover={{ color: "deep-cove.900" }} _active={{ color: "deep-cove.800" }} px="4" py="1.5">
                  {navItem.label}
                </Text>
              </RouterLink>
            </React.Fragment>
          ))}
        </Stack>

        <Stack
          display={{ base: "flex", md: "flex" }}
          justify={"flex-end"}
          direction={"row"}
          spacing={2}
          ml="auto"
          align="center"
        >
          {isAuthenticated ? (
            <>
              {/* <IconButton
                icon={<LuMessagesSquare />}
                fontSize="2xl"
                w="12"
                h="12"
                color="black"
                variant={"ghost"}
                aria-label={"Chat"}
                _hover={{
                  color: "deep-cove.950",
                }}
                _active={{
                  color: "deep-cove.900",
                }}
                mx="-2"
                onClick={() => navigate("/chats/1")}
              />
              <IconButton
                icon={<LuBell />}
                fontSize="2xl"
                w="12"
                h="12"
                color="black"
                variant={"ghost"}
                aria-label={"Notificações"}
                _hover={{
                  color: "deep-cove.950",
                }}
                _active={{
                  color: "deep-cove.900",
                }}
                mx="-2"
              /> */}
              <Flex align="center">
                <Avatar size="md" name={user?.name} h="10" w="10" />
                <Flex ml="3" direction="column" align="start" my="3" color="black">
                  <Text fontSize="md" fontWeight="bold">{user?.name}</Text>
                  <Box display="inline-flex" alignItems="center">
                    <Avatar bg='deep-cove.950' color="las-palmas.500" fontSize="2xs" h="4" w="4" icon={<LuLandmark />} />
                    <Text fontSize="sm" ml="1">{user?.total_points}</Text>
                    <Text fontSize="sm" mx="2" color="las-palmas.700">&middot;</Text>
                    <Link fontSize="sm" onClick={logout}>Sair</Link>
                  </Box>
                </Flex>
              </Flex>
            </>
          ):(
            <Button
              variant="solid"
              bg="#1451B4"
              size="sm"
              _hover={{
                bg: "primary.110",
              }}
              _active={{
                bg: "primary.110",
              }}
              borderRadius="full"
              px="4"
              leftIcon={<FaUser />}
              fontWeight={600}
              onClick={onOpenModal}
            >
              Entrar com o gov.br
            </Button>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
      <ModalLogin isOpen={isOpenModal} onClose={onCloseModal} />
    </Box>
  );
};

export default Header;
