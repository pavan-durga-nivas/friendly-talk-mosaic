
import React from "react";
import ChatContainer from "@/components/ChatContainer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-semibold text-gray-800">React Chat App</h1>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-6 flex">
        <div className="w-full lg:w-2/3 mx-auto h-[calc(100vh-140px)]">
          <ChatContainer />
        </div>
      </main>
    </div>
  );
};

export default Index;
