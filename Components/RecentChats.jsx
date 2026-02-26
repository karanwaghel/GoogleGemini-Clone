// import { Typography, Box, styled, List, ListItem } from "@mui/material";
// import { useChat } from "./Context";
// import { useEffect,useState} from "react";

// const RecentWrapper = styled(Box)({
//   flex: 1,
//   marginBlock: "3rem 3rem",
//   cursor: "pointer",
// });

// const RecentChatList = styled(ListItem)({
//   paddingLeft:2,

// })

// function RecentChats() {
//   const { ChatHistory, setChatHistory,ActiveChat,setActiveChat, Messages,setMessages} = useChat();


//    useEffect(() => {
//     if (Messages.length > 0) {
//       const firstUserMessage = Messages.find((msg) => msg.role === "user");

//       if (firstUserMessage) {
//         setChatHistory((prev) => {
//           if (!ActiveChat) {
//             const newChat = {
//               id: Date.now(),
//               title: firstUserMessage.text,
//               message: [...Messages],
//             };
//             setActiveChat(newChat.id); 
//             return [...prev, newChat];
//           } else {
//             return prev.map((chat) =>
//               chat.id === ActiveChat ? { ...chat, message: [...Messages] } : chat
//             );
//           }
//         });
//       }
//     }
//   }, [Messages, setChatHistory, ActiveChat, setActiveChat]);


//   return (
//     <>
//       <RecentWrapper>
//         <List>
//           <Typography variant="body2">Recent</Typography>
//           {
//             ChatHistory.map((Chat)=>
//             <RecentChatList  key={Chat.id} onClick={()=>setActiveChat(Chat.id)} selected={Chat.id === ActiveChat}
//              >
//               {Chat.title.length > 30 ? Chat.title.slice(0,30) + '...':Chat.title}
//             </RecentChatList>)
//           }
//         </List>
//       </RecentWrapper>
//     </>
//   );
// }

// export default RecentChats;
