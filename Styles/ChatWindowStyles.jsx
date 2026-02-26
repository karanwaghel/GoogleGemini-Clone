import { Box, Typography, styled, CircularProgress } from "@mui/material";


export const ChatWindowContainer = styled(Box)({
  flexGrow: 1,
  display: "flex",
  width: "46rem",
  padding:"1rem",
  flexDirection: "column",
  overflowY: "auto",
  paddingBottom: "7rem",
  overflowX: "hidden",
  margin: "0 auto",
  marginTop: "4rem",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const MarkdownWrapper = styled(Box)({
  "& p": {
    margin: "0.5rem 0",
  },
  "& ul": {
    paddingLeft: "1.2rem",
    margin: "0.5rem 0",
  },
  "& li": {
    marginBottom: "0.25rem",
  },
  "& code": {
    background: "#1e1e1e",
    padding: "2px 4px",
    borderRadius: "4px",
    fontSize: "0.9rem",
  },
  "& pre": {
    margin: "0.5rem 0",
    padding: "8px",
    backgroundColor: "#1e1e1e",
    borderRadius: "8px",
    overflowX: "auto",
  },
});

export const CircularLoading = styled(CircularProgress)({
  position: "absolute",
  top:5,
  right:18
});

export const SingleChatTile = styled(Box)({
  display: "flex",
  padding: "4px",
  marginBottom: "1rem",
  color: "white",
  width: "100%",
});

export const BaseChat = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  fontFamily: theme.typography.body1.fontFamily,
  fontSize: theme.typography.body1.fontSize,
  lineHeight: theme.typography.body1.lineHeight,
  fontWeight: theme.typography.body1.fontWeight,
  color: "white",
  maxWidth: "95%",
  textWrap:'wrap'
}));

export const UserChat = styled(BaseChat)({
  backgroundColor: "#333537",
  borderRadius: "20px 4px 20px 20px",
  padding: "10px 14px",

});

export const AiChat = styled(BaseChat)({
  padding: "12px 16px 12px 10px",
  position:'relative',
});

export const GeminiIcon = styled("img")({
  paddingTop: "12px",
});

