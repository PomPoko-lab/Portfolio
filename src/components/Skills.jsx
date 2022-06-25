import { Container, Center, Image, SlideFade, Fade } from '@chakra-ui/react';

import logoBootStrap from '../assets/logoBoostrap.svg';
import logoChakraUI from '../assets/logoChakraUI.svg';
import logoFirebase from '../assets/logoFirebase.svg';
import logoReact from '../assets/logoReact.svg';

const Skills = () => {
  return (
    <Container
      as='section'
      display='flex'
      justifyContent='space-between'
      py='4'
      borderTop='1px solid rgba(255,255,255, 0.5)'
      borderBottom='1px solid rgba(255,255,255, 0.5)'
      backgroundColor='blackAlpha.50'
      maxW='30em'
    >
      <SlideFade
        in
        offsetY='-15px'
        transition={{ enter: { duration: 2, delay: 1.2 } }}
        unmountOnExit
      >
        <Center>
          <Image w='60px' src={logoReact} alt='logo of React'></Image>
        </Center>
      </SlideFade>
      <SlideFade
        in
        offsetY='15px'
        transition={{ enter: { duration: 2, delay: 1.2 } }}
        unmountOnExit
      >
        <Center>
          <Image w='40px' src={logoFirebase} alt='logo of Firebase'></Image>
        </Center>
      </SlideFade>
      <SlideFade
        in
        offsetY='-15px'
        transition={{ enter: { duration: 2, delay: 1.2 } }}
        unmountOnExit
      >
        <Center>
          <Image w='50px' src={logoChakraUI} alt='logo of ChakraUI'></Image>
        </Center>
      </SlideFade>
      <SlideFade
        in
        offsetY='15px'
        transition={{ enter: { duration: 2, delay: 1.2 } }}
        unmountOnExit
      >
        <Center>
          <Image w='60px' src={logoBootStrap} alt='logo of Bootstrap'></Image>
        </Center>
      </SlideFade>
    </Container>
  );
};

export default Skills;
