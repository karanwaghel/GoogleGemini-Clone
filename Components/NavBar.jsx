import { Typography, Avatar, Link, Box } from "@mui/material";
import { Logo } from "../Assets/icons-data";
import { TopBar, TopRight, LogoImg, Btn } from "../Styles/mainStyles";
import { useChat } from "./Context";

const Upgradelink =
  "https:one.google.com/explore-plan/gemini-advanced?utm_source=gemini&utm_medium=web&utm_campaign=sidenav_evo&g1_landing_page=65";



function NavBar() {
  
  const{open} = useChat()

  return (
    <>
      <TopBar>
        <Box sx={{display:'flex'}}> 
          <Typography
            variant="h6"
            sx={{ m: "14px 6px 0 8px", cursor: "pointer" }}
          >
            Gemini
          </Typography>
        </Box>
        <TopRight sx={{position:open ? 'absolute': null}}>
          <Link href={Upgradelink} target="_blank" rel="noopener">
            <Btn variant="outlined">
              <LogoImg src={Logo} alt="Gemini Logo" />
              Upgrade
            </Btn>
          </Link>
          <Avatar
            sx={{
              bgcolor: "#455A64",
              height: 30,
              width: 30,
              cursor: "pointer",
              fontSize: "18px",
              ml: "16px",
            }}
          >
            K
          </Avatar>
        </TopRight>
      </TopBar>
    </>
  );
}

export default NavBar;
