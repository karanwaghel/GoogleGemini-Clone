import { Box, TextField, Typography, styled } from "@mui/material";

export const StickyInputWrapper = styled(Box)({
  position: "sticky",
  bottom: 20,
  zIndex:'1000'
});


export const InputfieldWrapper = styled(Box)({
  border: "1px solid #838584",
  minHeight: "5.4rem",
  color: "#A2A9B0",
  width: "46rem",
  marginTop: "2rem",
  padding: "4px",
  boxShadow: "0 0 2px",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
});

export const InputField = styled(TextField)({
  "& .MuiInputBase-root": {
    "&::before": {
      borderBottom: "none",
    },
    "&::after": {
      borderBottom: "none",
    },
    "&:hover:not(.Mui-disabled)::before": {
      borderBottom: "none",
    },
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#A2A9B0",
    opacity: 1,
  },
  "& .MuiInputBase-input": {
    color: "#A2A9B0",
  },
  width: "95%",
  padding: "10px 15px 6px 15px",
});

export const GreetingText = styled(Typography)({
  backgroundImage: " linear-gradient(to right, #3276F5, #4C99F7);",
  backgroundClip: "text",
  color: "transparent",
  cursor: "pointer",
  textAlign:'center'
});

export const IconWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 8,
  padding: "8px 2px 4px 2px",
  "& .MuiSvgIcon-root": {
    padding: "8px",
    cursor: "pointer",
    borderRadius: "50%",
    background: "transparent",
    transition: "background 0.3s ease",
    "&:hover": {
      background: "#353739",
    },
  },
});
