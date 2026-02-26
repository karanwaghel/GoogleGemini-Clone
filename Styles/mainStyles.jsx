import { Box,styled,Button} from "@mui/material";

export const MainWrapper = styled(Box)(({ open }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  height: "100vh",
  marginLeft: open ? "17rem" : "4.5rem",
  transition: "marginLeft 0.3s ease",
  padding: "0.5rem",

}));

export const ChatLayout = styled(Box)({
  display: "flex",
  marginTop: "18px",
  height: "100%",
  flex: 1,
  position: "relative",
  flexDirection: "column",
  alignItems: "center",
  paddingTop:'2rem'
});

export const TopBar = styled(Box)({
  height: "2rem",
  zIndex:"1000",
  width:'95%',
  background:'#1B1C1D',
  position:'fixed',
  top:0,
  color: "#9EA49D",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBlock:'0.5rem 2rem',
});

export const TopRight = styled(Box)({
  display: "flex",
  margin: "32px 20px 10px 10px",
  alignItems: "center",
  right:'12.5rem'

});

export const LogoImg = styled("img")({
  height: 16,
  marginInline: "6px 8px",
});

export const Btn = styled(Button)({
  background: "#3d3f42",
  color: "white",
  border: "none",
  textTransform: "none",
  fontSize: "12px",
  paddingBlock: "8px",
  borderRadius: "8px",
  "&:hover": {
    background: "#4C4E51",
  },
});
