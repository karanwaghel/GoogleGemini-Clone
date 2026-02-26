import { useState, useContext, createContext } from "react";

const ChatContext = createContext();

export function ChatProvider({ children }) {
  const [open, Setopen] = useState(false);
  const [Prompt, setPrompt] = useState("");
  const [Loading, setLoading] = useState(true);
  const [ChatHistory, setChatHistory] = useState([]);
  const [ActiveChat, setActiveChat] = useState(false);
  const [Messages, setMessages] = useState([]);

  const startNewChat = () => {
    setMessages([]);
    setActiveChat(false);
    setPrompt("");
    setLoading(false);
  };

  return (
    <ChatContext.Provider
      value={{
        open,
        Setopen,
        Prompt,
        setPrompt,
        Loading,
        setLoading,
        ChatHistory,
        setChatHistory,
        ActiveChat,
        setActiveChat,
        Messages,
        setMessages,
        startNewChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
