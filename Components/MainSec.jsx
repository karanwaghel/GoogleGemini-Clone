import InputSec from "./InputSec";
import { MainWrapper,ChatLayout} from "../Styles/mainStyles";
import Chatwindow from "./ChatWindow";
import NavBar from "../Components/NavBar";
import { useChat } from "./Context";


function MainSection() {
  const { open } = useChat();

  return (
    <MainWrapper open={open}>
      <NavBar />
      <ChatLayout>
        <Chatwindow />
        <InputSec />
      </ChatLayout>
    </MainWrapper>
  );
}

export default MainSection;
