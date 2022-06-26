import {
  Container,
  Image,
  Heading,
  Text,
  Box,
  Center,
  SlideFade,
} from '@chakra-ui/react';

import { EmailIcon } from '@chakra-ui/icons';

import myImg from '../assets/MeCropped.jpg';

const MyInfo = ({ initAnimation }) => {
  return (
    <>
      <SlideFade
        in={initAnimation}
        offsetY='-15px'
        transition={{ enter: { duration: 0.5 } }}
        unmountOnExit
      >
        <Container
          as='main'
          p='6'
          mt='12em'
          mb='5em'
          display='flex'
          flexDirection='column'
          textAlign='center'
          background='linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.6))'
          border='1px solid white'
          shadow='lg'
          borderRadius='md'
        >
          <Image
            mx='auto'
            mb='4'
            p='2'
            objectFit='cover'
            boxSize={['130px', '150px']}
            src={myImg}
            alt='Picture of me'
            borderRadius='50em'
            border='2px solid'
            borderColor='orange.100'
          />

          <Heading
            as='h1'
            letterSpacing='wide'
            color='gray.700'
            fontSize={['3xl', null, null, '4xl']}
            mb='4'
          >
            Kenny Cao
          </Heading>
          <Box
            display='flex'
            mx='auto'
            gap={['4', '6', '8']}
            justifyContent='center'
          >
            <Text color='gray.600' fontSize='lg'>
              Web Developer
            </Text>
            <Text color='gray.700' fontSize='lg'>
              |
            </Text>
            <Text color='gray.600' fontSize='lg'>
              Business Owner
            </Text>
          </Box>
        </Container>
      </SlideFade>
      <SlideFade
        in={initAnimation}
        offsetY='-15px'
        transition={{ enter: { duration: 0.5, delay: 0.4 } }}
        unmountOnExit
      >
        <Box
          display='flex'
          gap='2'
          color='white'
          justifyContent='center'
          backgroundColor='orange.300'
          transition='all 200ms ease'
          width={['300px', 'auto']}
          px='6'
          py='3'
          borderRadius='lg'
          shadow='base'
          _hover={{
            filter: 'brightness(1.1)',
            cursor: 'pointer',
          }}
        >
          <Center>
            <EmailIcon />
          </Center>
          <Text>hello@pompoko.io</Text>
        </Box>
      </SlideFade>
    </>
  );
};

export default MyInfo;
