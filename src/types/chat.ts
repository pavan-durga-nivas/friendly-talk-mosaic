
export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Message {
  id: string;
  text: string;
  sender: User;
  timestamp: Date;
  isOwn: boolean;
}
