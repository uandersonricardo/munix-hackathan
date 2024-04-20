import api from "../config/api";

export const createDiscussionRequest = async (
  request: DiscussionsCreateRequest
) => {
  const response = await api.post<DiscussionsCreateResponse>(
    "/discussions",
    request
  );

  return response;
};
