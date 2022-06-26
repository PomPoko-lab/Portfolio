import { Container, Image, Heading, Text, Box, Fade } from '@chakra-ui/react';

import pomImg from '../assets/RosePomMain.jpg';

const MyInfo = () => {
  return (
    <>
      <Container
        p='0'
        as='main'
        mt='15em'
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
            mb='4'
          >
            Kenny Cao
          </Heading>
          <Box
            display='flex'
            mx='auto'
            gap={['4', '6', '10']}
            mb='4'
            justifyContent='center'
          >
            <Text letterSpacing='wider' color='teal.300' fontSize='md'>
              WEB DEVELOPER
            </Text>
            <Text letterSpacing='wider' color='teal.500' fontSize='md'>
              |
            </Text>
            <Text letterSpacing='wider' color='teal.300' fontSize='md'>
              BUSINESS OWNER
            </Text>
          </Box>
        </Fade>
        <Fade
          in
          transition={{ enter: { duration: 0.4, delay: 0.5 } }}
          unmountOnExit
        >
          <Text letterSpacing='widest' color='teal.500' mb='3em' fontSize='sm'>
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
            maxW={['150px', null, null, null, null, '200px']}
            objectFit='contain'
            objectPosition='bottom'
            src={pomImg}
            alt='image of a racoon eating a tomato'
            borderRadius='10px'
          />
        </Fade>
      </Container>
    </>
  );
};

export default MyInfo;
