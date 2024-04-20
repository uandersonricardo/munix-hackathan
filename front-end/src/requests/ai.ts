import api from "../config/api";

export const chatRequest = async (request: AIChatRequest) => {
  const response = await api.post<FileFields>("/ai/chat", request);

  return response;
};
