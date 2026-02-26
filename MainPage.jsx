<<<<<<< HEAD

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

=======

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

>>>>>>> 5df8cde33fc02d28749c854a16711f304021da59
export default MainPage;