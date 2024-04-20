import { createContext, ReactNode, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { loginRequest } from "../requests/auth";

export interface AuthContextProps {
  isAuthenticated: boolean;
  user: AuthLoginResponse | null;
  id: number | null;
  login: (id: number) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const getIdFromLocalStorage = () => {
  const id = localStorage.getItem("an-user-id");

  if (!id) {
    return null;
  }

  return parseInt(id);
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
  const [id, setId] = useState<number | null>(getIdFromLocalStorage());
  const [user, setUser] = useState<AuthLoginResponse | null>(getUserFromLocalStorage());
  const toast = useToast();

  const isAuthenticated = !!id;

  useEffect(() => {
    // if (!isAuthenticated) {
    //   login();
    // }
  }, []);

  const login = async (id: number) => {
    try {
      const res = await loginRequest({ id });
      const user = res.data;

      localStorage.setItem("an-user-id", user.id.toString());
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
