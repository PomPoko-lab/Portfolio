import { Container, Image, Heading, Text, Box, Fade } from '@chakra-ui/react';

import pomImg from '../assets/RosePomMain.jpg';
import Skills from '../components/Skills';

const MyInfo = () => {
  return (
    <>
      <Container
        as='main'
        mb={['5em', null, null, null, '10em']}
        display='flex'
        flexDirection='column'
        textAlign='center'
      >
        <Fade
          in
          transition={{ enter: { duration: 0.4, delay: 0.2 } }}
          unmountOnExit
        >
          <Heading
            as='h1'
            letterSpacing='wide'
            color='teal.800'
            fontSize={['3xl', null, null, '4xl']}
            mb='5'
          >
            Kenny Cao
          </Heading>
          <Box display='flex' mx='auto' gap='10' mb='1' justifyContent='center'>
            <Text letterSpacing='wider' color='teal.300' fontSize='xl'>
              WEB DEVELOPER
            </Text>
            <Text letterSpacing='wider' color='teal.500' fontSize='xl'>
              |
            </Text>
            <Text letterSpacing='wider' color='teal.300' fontSize='xl'>
              BUSINESS OWNER
            </Text>
          </Box>
        </Fade>
        <Fade
          in
          transition={{ enter: { duration: 0.4, delay: 0.5 } }}
          unmountOnExit
        >
          <Text letterSpacing='widest' color='teal.500' mb='3em'>
            hello@pompoko.io
          </Text>
        </Fade>
        <Fade
          in
          transition={{
            enter: { duration: 0.6, delay: 0.7 },
          }}
          unmountOnExit
        >
          <Image
            mx='auto'
            mb='2'
            maxW={['300px', null, null, null, null, '330px']}
            objectFit='contain'
            objectPosition='bottom'
            src={pomImg}
            alt='image of a racoon eating a tomato'
            borderRadius='10px'
          />
        </Fade>
      </Container>
      <Skills />
    </>
  );
};

export default MyInfo;
