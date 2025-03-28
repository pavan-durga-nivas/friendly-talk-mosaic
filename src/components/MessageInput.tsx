
import React, { useState, KeyboardEvent } from "react";
import { Send } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t p-4 bg-white">
      <div className="flex items-end space-x-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="flex-1 resize-none rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 h-12 max-h-32 min-h-[3rem]"
          rows={1}
        />
        <button
          onClick={handleSubmit}
          disabled={!message.trim()}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors hover:bg-blue-600"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
