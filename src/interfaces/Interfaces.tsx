export interface Message {
  role: 'user' | 'ai';
  content: string;
  timestamp?: number;
}

export interface File {
  id: string,
  name: string,
  description: string,
  fileAddress: string,
  fileSize: string,
  createdAt: string
}

export interface User {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  createdAt: string
}