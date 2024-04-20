import api from "../config/api";

export const loginRequest = async (request: AuthLoginRequest) => {
  const response = await api.post<AuthLoginResponse>("/auth/login", request);

  return response;
};

export const meRequest = async (id: number) => {
  const response = await api.get<AuthMeResponse>("/auth/me", {
    params: { id },
  });

  return response;
};
