import { Box, Typography } from "@mui/material";
import { useChat } from "./Context";
import { ChatLogo } from "../Assets/icons-data";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import {ChatWindowContainer,MarkdownWrapper,GeminiIcon,CircularLoading,SingleChatTile,AiChat,UserChat,} from '../Styles/ChatWindowStyles'


function Chatwindow() {
  const { ActiveChat, Messages, Loading } = useChat();
  const BottomRef = useRef(null);

  useEffect(() => {
    BottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [Messages]);

  return (
    <>
      {ActiveChat ? (
        <ChatWindowContainer>
          {Messages.map((msg) => (
            <SingleChatTile
              key={msg.id}
              sx={{
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              {msg.role === "ai" && (
                <GeminiIcon src={ChatLogo} width={20} sx={{alignSelf:Loading ? 'center' : 'flex-start'}} alt="Gemini Logo" />
              )}

              {msg.role === "ai" && Loading ? (
                <AiChat>
                  <CircularLoading size={36} />
                </AiChat>
              ) : msg.role === "ai" ? (
                <AiChat>
                  <MarkdownWrapper>
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </MarkdownWrapper>
                </AiChat>
              ) : (
                <UserChat>
                  <Typography>{msg.text}</Typography>
                </UserChat>
              )}
            </SingleChatTile>
          ))}
          <Box ref={BottomRef} />
        </ChatWindowContainer>
      ) : null}
    </>
  );
}

export default Chatwindow;
