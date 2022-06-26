import { Box, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import bg from './assets/bg.jpg';

// components
import MainNav from './components/MainNav';
import BackgroundBox from './components/BackgroundBox';
import Home from './pages/Home';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [initAnimation, setInitAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitAnimation(true);
    }, 1000);
  }, []);

  return (
    <>
      <BackgroundBox />
      <Box
        h={`${window.innerHeight}px`}
        display='flex'
        flexDirection='column'
        alignItems='center'
        px='4'
      >
        <Image
          zIndex='-1'
          position='absolute'
          left='50%'
          top='50%'
          transform='translate(-50%, -50%)'
          // h='100vh'
          h={`${window.innerHeight}px`} // Some new magic
          objectFit='cover'
          src={bg}
          alt='beautiful blue skies'
        />
        <MainNav setCurrentPage={setCurrentPage} />
        {currentPage === 'Home' && <Home initAnimation={initAnimation} />}
        {currentPage === 'AboutMe' && <AboutMe />}
        {currentPage === 'Projects' && <Projects />}
        <Footer />
      </Box>
    </>
  );
}

export default App;
