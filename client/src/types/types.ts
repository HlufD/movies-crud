// user
export interface LoginFormData {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  user?: {
    id: number;
    username: string;
    email: string;
    password: string;
    createdAt: string;
  };
}

// channel
export interface Channel {
  id?: string;
  name: string;
}

export interface ChannelResponse {
  success: boolean;
  channels?: {
    id: number;
    name: string;
  };
}
