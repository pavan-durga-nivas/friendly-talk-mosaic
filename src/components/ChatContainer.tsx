
import React from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { useMessages } from "@/hooks/useMessages";

const ChatContainer: React.FC = () => {
  const { messages, sendMessage, currentUser } = useMessages();

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full">
      <div className="bg-gray-50 border-b p-4 flex items-center">
        <div className="flex-shrink-0 mr-3">
          <img
            src="https://ui-avatars.com/api/?name=John+Doe&background=f97316&color=fff"
            alt="John Doe"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div>
          <h2 className="font-medium text-gray-900">John Doe</h2>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>

      <MessageList messages={messages} />
      
      <MessageInput onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatContainer;
