import React, { useContext } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import { AuthContext } from "./contexts/auth";
import Login from "./pages/login";
import Layout from "./components/layout";
import Home from "./pages/home";
import File from "./pages/file";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/"
          element={
            // <RequireAuth>
              <Layout />
            // </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route path="/files/:id/versions/:versionId" element={<div><File /></div>} />
          <Route path="/files/:id" element={<File />} />
        </Route>
        {/* <Route path="/chats/:id" element={<Chat />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
