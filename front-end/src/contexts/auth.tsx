import { createContext, ReactNode, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import api from "../config/api";

export interface User {
  id: string;
  name: string;
  email: string;
  total_points: number;
}

export interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  id: string | null;
  login: (id: number) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const getIdFromLocalStorage = () => {
  const token = localStorage.getItem("an-user-id");

  if (!token) {
    return null;
  }

  return token;
};

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("an-user");

  if (!user) {
    return null;
  }

  return JSON.parse(user);
}

interface AuthProviderProps {
  children?: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [id, setId] = useState<string | null>(getIdFromLocalStorage());
  const [user, setUser] = useState<User | null>(getUserFromLocalStorage());
  const toast = useToast();

  const isAuthenticated = !!id;

  useEffect(() => {
    // if (!isAuthenticated) {
    //   login();
    // }
  }, []);

  const login = async (id: number) => {
    try {
      const res = await api.post("/auth/login", { id });
      const user = res.data;

      localStorage.setItem("an-user-id", user.id);
      localStorage.setItem("an-user", JSON.stringify(user));
      setId(user.id);
      setUser(user);
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
    localStorage.removeItem("an-user");
    setId(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, id, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
