import { Box, Image } from '@chakra-ui/react';
import { useState } from 'react';

import bg from './assets/bg.jpg';

// components
import MainNav from './components/MainNav';
import BackgroundBox from './components/BackgroundBox';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  return (
    <>
      <BackgroundBox />
      <Box h='100vh' display='flex' flexDirection='column' alignItems='center'>
        <Image
          zIndex='-1'
          position='absolute'
          left='50%'
          top='50%'
          transform='translate(-50%, -50%)'
          h='100vh'
          objectFit='cover'
          src={bg}
          alt='beautiful blue skies'
        />
        <MainNav setCurrentPage={setCurrentPage} />
        {currentPage === 'Home' && <Home />}
        {currentPage === 'AboutMe' && <AboutMe />}
        <Footer />
      </Box>
    </>
  );
}

export default App;
