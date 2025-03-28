
import { useState, useCallback } from "react";
import { Message, User } from "@/types/chat";

// Mock current user
const currentUser: User = {
  id: "user1",
  name: "You",
  avatar: "https://ui-avatars.com/api/?name=You&background=3b82f6&color=fff",
};

// Mock other user for demo purposes
const otherUser: User = {
  id: "user2",
  name: "John Doe",
  avatar: "https://ui-avatars.com/api/?name=John+Doe&background=f97316&color=fff",
};

// Some initial messages for the demo
const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hey there! How are you doing?",
    sender: otherUser,
    timestamp: new Date(Date.now() - 60000 * 25),
    isOwn: false,
  },
  {
    id: "2",
    text: "I'm good, thanks for asking! How about you?",
    sender: currentUser,
    timestamp: new Date(Date.now() - 60000 * 24),
    isOwn: true,
  },
  {
    id: "3",
    text: "I'm doing well! Just working on a new project.",
    sender: otherUser,
    timestamp: new Date(Date.now() - 60000 * 10),
    isOwn: false,
  },
  {
    id: "4",
    text: "That sounds interesting. What kind of project is it?",
    sender: currentUser,
    timestamp: new Date(Date.now() - 60000 * 8),
    isOwn: true,
  },
  {
    id: "5",
    text: "It's a chat application built with React. I'm trying to make it look and feel modern.",
    sender: otherUser,
    timestamp: new Date(Date.now() - 60000 * 5),
    isOwn: false,
  },
];

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  // Function to add a new message
  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: currentUser,
      timestamp: new Date(),
      isOwn: true,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Simulate a response after a small delay
    setTimeout(() => {
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! This is an automated response.",
        sender: otherUser,
        timestamp: new Date(),
        isOwn: false,
      };
      
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    }, 1000);
  }, []);

  return { messages, sendMessage, currentUser };
}
