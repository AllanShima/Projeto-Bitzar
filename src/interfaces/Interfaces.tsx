export interface Message {
  role: 'user' | 'ai';
  content: string;
  createdAt?: Date;
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

export interface Team {
  id: string,
  title: string,
  description: string,
  code: string,
  owner?: User,
  members: TeamMember[],
  createdAt: string,
}

export interface TeamMember {
  status: 'admin' | 'participant',
  user?: User
}