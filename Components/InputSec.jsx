import { Tooltip, Typography } from "@mui/material";
import { icons } from "../Assets/icons-data";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  InputfieldWrapper,
  InputField,
  IconWrapper,
  StickyInputWrapper,
  GreetingText,
  
} from "../Styles/InputStyles";
import { useChat } from "./Context";




function InputSec() {

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const {setNewChat,Prompt,setPrompt,ActiveChat,setActiveChat,setMessages,setLoading} = useChat();

  async function CallGemini(Prompt) {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(Prompt);
      return result.response.text();
    } catch (err) {
      console.error("Error:", err);
      return "Something went wrong!";
    }
  }

  const HandelInputChange = (e) => {
    setPrompt(e.target.value);
  };


  const HandelSubmit = async () => {
    if (Prompt.trim() === "") return;
    setPrompt('')
    setActiveChat(true)
    
    setMessages((prev)=>[
      ...prev,
      {
       id:Date.now(),role:'user',text:Prompt, 
      },
    ]);    
    setLoading(true)
    const response = await CallGemini(Prompt);
    
    setMessages((prev)=>[
      ...prev,
      {
       id:Date.now()+1,role:'ai',text:response, 
      },
    ]);
    setLoading(false)
    setNewChat(true);
  };

  const HandelKeyPress = (e) => {
    if(e.key === 'Enter' && !e.shiftkey){
      e.preventDefault();
      if(Prompt.trim() !=="") HandelSubmit();
    }
  };

  return (
    <>
      <StickyInputWrapper sx={{marginTop:!ActiveChat ? '9rem' : null}}>
        {
          !ActiveChat ? <GreetingText variant="h4">Hello,Karan</GreetingText >: null
        }
        <InputfieldWrapper >
          <InputField
            variant="standard"
            multiline
            maxRows={6}
            placeholder="Ask Gemini"
            fullWidth
            onChange={HandelInputChange}
            onKeyDown={HandelKeyPress}
            value={Prompt}
          />
          <IconWrapper>
            <Tooltip title="Add files">
              <icons.AddIcon />
            </Tooltip>
            <Tooltip title="Tools">
              <icons.TuneIcon />
            </Tooltip>
            <Tooltip title={Prompt.length > 0 ? "Submit" : "Use microphone"}>
              {Prompt.length > 0 ? (
                <icons.SendIcon
                  sx={{
                    marginLeft: "auto",
                    marginRight: "6px",
                    padding: "2px",
                  }}
                  onClick={HandelSubmit}
                />
              ) : (
                <icons.MicIcon
                  sx={{ marginLeft: "auto", marginRight: "6px" }}
                />
              )}
            </Tooltip>
          </IconWrapper>
        </InputfieldWrapper>
        <Typography color="#9EA49D" sx={{ fontSize:'12px',textAlign:'center',marginTop:'12px'}}>Gemini can make mistakes, so double-check it</Typography>
      </StickyInputWrapper>
    </>
  );
}

export default InputSec;
