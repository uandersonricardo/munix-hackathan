import { createContext, ReactNode, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  id: string | null;
  login: () => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const fakeUser: User = {
  id: "1",
  name: "José Carlos",
  email: "jose.carlos@gov.br",
};

const getIdFromLocalStorage = () => {
  const token = localStorage.getItem("an-user-id");

  if (!token) {
    return null;
  }

  return token;
};

interface AuthProviderProps {
  children?: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [id, setId] = useState<string | null>(getIdFromLocalStorage());
  const [user, setUser] = useState<User | null>(getIdFromLocalStorage() ? fakeUser : null);
  const toast = useToast();

  const isAuthenticated = !!id;

  useEffect(() => {
    // if (!isAuthenticated) {
    //   login();
    // }
  }, []);

  const login = async () => {
    try {
      localStorage.setItem("an-user-id", fakeUser.id);
      setId(fakeUser.id);
      setUser(fakeUser);
    } catch (err) {
      toast({
        title: "Erro",
        description: "Usuário ou senha incorretos",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("an-user-id");
    setId(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, id, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
