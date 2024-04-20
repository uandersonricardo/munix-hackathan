import api from "../config/api";

export const getFilesRequest = async (params: FilesIndexRequest) => {
  const response = await api.get<FilesIndexResponse>("/files", {
    params,
  });

  return response;
};

export const findFileRequest = async (id: number) => {
  const response = await api.get<FilesShowResponse>(`/files/${id}`);

  return response;
};

export const updateFileRequest = async (request: FilesUpdateRequest) => {
  const response = await api.put<FilesUpdateResponse>(
    `/files/${request.id}`,
    request
  );

  return response;
};
