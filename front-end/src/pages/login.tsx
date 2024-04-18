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
import { Navigate } from "react-router-dom";

import { AuthContext } from "../contexts/auth";
import logo from "../assets/react.svg";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const { login, isAuthenticated } = useContext(AuthContext);
  const toast = useToast();
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      toast({
        title: "Atenção",
        description: "Preencha todos os campos",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    login().then(() => {
      setLoading(false);
    });
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Flex h="full" bg="#f9f9f9" align="center">
      <Container maxW="lg" py={{ base: "12", md: "24" }} px={{ base: "4", sm: "8" }}>
        <Stack spacing="8" alignItems="center">
          <Box p="8" bg="white" boxShadow="sm" borderRadius="md">
            <Stack alignItems="center">
              <Image src={logo} h="16" />
              <Text fontSize="lg" fontWeight="semibold" lineHeight="shorter">
                Acesse a sua conta
              </Text>
              <Stack spacing="4" my="2">
                <FormControl>
                  <FormLabel htmlFor="email" fontWeight="bold" fontSize="sm">
                    E-mail
                  </FormLabel>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    borderColor="neutral.90"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password" fontWeight="bold" fontSize="sm">
                    Senha
                  </FormLabel>
                  <InputGroup>
                    <InputRightElement>
                      <IconButton
                        variant="link"
                        aria-label={isOpen ? "Mask password" : "Reveal password"}
                        icon={isOpen ? <HiEyeOff /> : <HiEye />}
                        onClick={onClickReveal}
                        colorScheme="gray"
                      />
                    </InputRightElement>
                    <Input
                      id="password"
                      ref={inputRef}
                      name="password"
                      type={isOpen ? "text" : "password"}
                      borderColor="neutral.90"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                T
              </Stack>
              <Button
                onClick={handleLogin}
                isLoading={loading}
                bgColor="primary.100"
                w="full"
                borderRadius="full"
                transition={"all 0.2s ease-in"}
                _hover={{ bgColor: "primary.110" }}
                _active={{
                  transform: "scale(0.96)",
                }}
              >
                Entrar
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Flex>
  );
};

export default Login;
