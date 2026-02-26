import { useState } from "react";
import { icons } from "../Assets/icons-data";
import {
  SidebarDrawer,
  IconContainerTop,
  IconContainerBottom,
  Chatwrapper,
  SettingWrapper,
} from "../Styles/SidebarStyle";
import { Typography, Tooltip } from "@mui/material";
import { useChat } from "./Context";


function Sidebar() {

  const [Keepopen,setKeepOpen] = useState(false);
  const {open,Setopen,NewChat,startNewChat,ActiveChat}= useChat();

  const Handelmenutoogle =()=>{
    Setopen(!open)
    setKeepOpen(!open)
  }

  const handleMouseEnter=()=>{
    if (!Keepopen) {
      Setopen(true);
    }
  }

  const handleMouseLeave =()=>{
    if (!Keepopen) {
      Setopen(false);
    }
  }

const handelNewChat = () => {
  startNewChat();
};

  
  return (
    <>
      <SidebarDrawer variant="permanent" open={open}
        onMouseLeave={handleMouseLeave}>
        <IconContainerTop>
          <Tooltip title={open ? "Collapsing Menu" : "Expand Menu"}>
            <icons.MenuOutlinedIcon onClick={Handelmenutoogle} />
          </Tooltip>
          <Tooltip title="Search">
            <icons.SearchIcon
              sx={{
                padding: "8px",
                borderRadius: "50%",
                background: "#353739",
              }}
            />
          </Tooltip>
        </IconContainerTop>
        <IconContainerBottom  onMouseEnter={handleMouseEnter}>
          <Tooltip title={ActiveChat ? "New Chat" : ""}>
            <Chatwrapper sx={{ opacity: ActiveChat ? 1 : 0.4 }}>
              <icons.ModeEditIcon sx={{ width: "22px" }} onClick={handelNewChat}/>
              {open && <Typography variant="body1">New Chat</Typography>}
            </Chatwrapper>
          </Tooltip>
          
          <Tooltip title="Setting and Help" placement="right">
            <SettingWrapper>
              <icons.SettingsIcon sx={{ width: "22px", padding: "4px" }} />
              {open && (
                <Typography variant="body2">Setting and Help</Typography>
              )}
            </SettingWrapper>
          </Tooltip>
        </IconContainerBottom>
      </SidebarDrawer>
    </>
  );
}

export default Sidebar;
