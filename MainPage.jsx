
import { Box, styled } from '@mui/material';
import Sidebar from "./Components/SideBar";
import MainSection from "./Components/MainSec";

const RootContainer = styled(Box)({
  display: 'flex',
  height: '100vh',
  width: '100vw',
  overflow: 'hidden', 
  background: '#1B1C1D',
});

function MainPage() {

  return (
    <RootContainer>
      <Sidebar />
      <MainSection />
    </RootContainer>
  );
}

export default MainPage;