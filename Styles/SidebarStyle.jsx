import { Box, Drawer, styled } from "@mui/material";

export const SidebarDrawer = styled(Drawer)(({ open }) => ({
  "& .MuiDrawer-paper": {
    width: open ? "17rem" : "4.5rem",
    transition: "width 0.3s ease",
    boxSizing: "border-box",
    background: "#282A2C",
    color: "#9EA49D",
    overflow: "hidden",
  },
}));

export const IconContainerTop = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "16px 16px 26px 16px",
  gap: "2.8rem",
  cursor: "pointer",
  boxSizing: "border-box",
  "& .MuiSvgIcon-root": {
    padding: "8px",
    width: "22px",
    borderRadius: "50%",
    color: "#9EA49D",
    background: "transparent",
    transition: "background 0.3s ease",
    "&:hover": {
      background: "#353739",
    },
  },
});

export const IconContainerBottom = styled(Box)({
  height: "100%",
  padding: "8px",
  margin: "4px 16px 26px 16px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const Chatwrapper = styled(Box)(({NewChat}) => ({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  cursor: "pointer",
}));

export const SettingWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  cursor: "pointer",
  borderRadius: "20px",
  background: "transparent",
  transition: "background 0.3s ease",
  "&:hover": {
    background: "#353739",
  },
});
