/// <reference types="vite/client" />

type FilesIndexRequest = {
  title?: string;
  date?: string;
  content?: string;
  accessPoints?: string;
  type?: string;
};

type FilesShowRequest = {
  id: number;
};

type FilesUpdateRequest = {
  id: number;
  title: string;
  content: string;
  accessPoints: string;
  type: string;
};

type FilesIndexResponse = {
  id: number;
  user_id: number | null;
  type: string;
  url: string;
  thumbnail: string | null;
  current_version_id: number | null;
  draft: boolean;
  created_at: Date;
  current_version: {
    id: number;
    user_id: number;
    file_id: number;
    title: string | null;
    date: string | null;
    content: string | null;
    verified: boolean;
    created_at: Date;
  } | null;
}[];

type FilesShowResponse = {
  id: number;
  user_id: number | null;
  type: string;
  url: string;
  thumbnail: string | null;
  current_version_id: number | null;
  draft: boolean;
  created_at: Date;
  current_version: {
    id: number;
    user_id: number;
    file_id: number;
    title: string | null;
    date: string | null;
    content: string | null;
    verified: boolean;
    created_at: Date;
    access_points: {
      id: number;
      file_id: number;
      vocabulary_id: number;
      vocabulary: {
        id: number;
        text: string;
      };
    }[];
    tags: {
      id: number;
      file_id: number;
      text: string;
    }[];
    user: {
      id: number;
      name: string;
      email: string;
    };
  } | null;
  versions: {
    id: number;
    user_id: number;
    file_id: number;
    title: string | null;
    date: string | null;
    content: string | null;
    verified: boolean;
    created_at: Date;
    access_points: {
      id: number;
      file_id: number;
      vocabulary_id: number;
      vocabulary: {
        id: number;
        text: string;
      };
    }[];
    tags: {
      id: number;
      file_id: number;
      text: string;
    }[];
    user: {
      id: number;
      name: string;
      email: string;
    };
  }[];
  discussions: {
    id: number;
    user_id: number;
    file_id: number;
    content: string;
    created_at: Date;
    user: {
      id: number;
      name: string;
      email: string;
    };
    replies: {
      id: number;
      user_id: number;
      discussion_id: number;
      content: string;
      created_at: Date;
    }[];
  }[];
};

type FilesUpdateResponse = {
  id: number;
};

type DiscussionsCreateRequest = {
  user_id: number;
  file_id: number;
  message: string;
  discussion_id: number | null;
};

type DiscussionsCreateResponse = {
  id: number;
  user_id: number;
  file_id: number;
  discussion_id: number | null;
  message: string;
  created_at: Date;
};

type AuthLoginRequest = {
  id: number;
};

type AuthLoginResponse = {
  id: number;
  email: string;
  name: string;
  total_points: number;
  verified: boolean;
};

type AuthMeRequest = {
  id: number;
};

type AuthMeResponse = {
  id: number;
  email: string;
  name: string;
  total_points: number;
  verified: boolean;
  contributions: {
    id: number;
    user_id: number;
    file_id: number;
    points: number;
    message: string;
    created_at: Date;
  }[];
  discussions: {
    id: number;
    user_id: number;
    file_id: number;
    discussion_id: number | null;
    message: string;
    created_at: Date;
  }[];
  achievements: {
    id: number;
    value: string;
    code: string | null;
    type: string;
    user_id: number;
    created_at: Date;
  }[];
};

type AIChatRequest = {
  id: number;
  question: string;
};

type AIChatResponse = string | null;

type FileFields = {
  title: string;
  date: string;
  content: string;
  accessPoints: string[];
  tags: string[];
};
