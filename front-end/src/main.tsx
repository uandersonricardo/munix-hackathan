import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from "react-query";

import Router from './router';
import { AuthProvider } from "./contexts/auth";
import theme from "./styles/theme";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
