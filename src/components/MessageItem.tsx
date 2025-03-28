
import React from "react";
import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";
import { format } from "date-fns";

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  return (
    <div
      className={cn(
        "flex mb-4",
        message.isOwn ? "justify-end" : "justify-start"
      )}
    >
      {!message.isOwn && (
        <div className="flex-shrink-0 mr-2">
          <img
            src={message.sender.avatar}
            alt={message.sender.name}
            className="w-8 h-8 rounded-full"
          />
        </div>
      )}

      <div
        className={cn(
          "max-w-[70%] rounded-lg px-4 py-2 shadow-sm",
          message.isOwn
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-100 text-gray-800 rounded-bl-none"
        )}
      >
        <div className="flex items-center mb-1">
          <span className={cn(
            "text-xs font-medium",
            message.isOwn ? "text-blue-100" : "text-gray-500"
          )}>
            {message.sender.name}
          </span>
        </div>
        
        <p className="text-sm whitespace-pre-wrap break-words">{message.text}</p>
        
        <div className="text-right mt-1">
          <span className={cn(
            "text-xs",
            message.isOwn ? "text-blue-100" : "text-gray-400"
          )}>
            {format(message.timestamp, "h:mm a")}
          </span>
        </div>
      </div>

      {message.isOwn && (
        <div className="flex-shrink-0 ml-2">
          <img
            src={message.sender.avatar}
            alt={message.sender.name}
            className="w-8 h-8 rounded-full"
          />
        </div>
      )}
    </div>
  );
};

export default MessageItem;
