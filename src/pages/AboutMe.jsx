import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  Link,
  Center,
  Icon,
  SlideFade,
} from '@chakra-ui/react';

import { AiOutlineFilePdf } from 'react-icons/ai';

import myImg from '../assets/MeCropped.jpg';
import bibiImg from '../assets/Bibi.jpg';

const AboutMe = () => {
  return (
    <Container as='main' textAlign='center'>
      <SlideFade
        in
        offsetY='-15px'
        transition={{ enter: { duration: 0.5 } }}
        unmountOnExit
      >
        <Box
          as='section'
          py='1'
          borderBottom='1px solid white'
          mb='6'
          mt={['1em', null, '3em']}
        >
          <Image
            mx='auto'
            p='1'
            mb={['0', '3']}
            objectFit='cover'
            display='block'
            boxSize={['100px', '150px']}
            src={myImg}
            alt='Picture of me'
            borderRadius='50em'
            border='2px solid'
            borderColor='orange.100'
          />

          <Heading
            as='h2'
            letterSpacing='wide'
            color='gray.700'
            fontSize={['3xl', null, null, '4xl']}
          >
            About Me
          </Heading>
        </Box>
      </SlideFade>
      <SlideFade
        in
        offsetY='-15px'
        transition={{ enter: { duration: 0.5, delay: 0.4 } }}
        unmountOnExit
      >
        <Box
          as='section'
          color='gray.700'
          p='6'
          pb='4'
          background='linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.6))'
          border='1px solid white'
          shadow='lg'
          borderRadius='md'
        >
          <Text mb='2'>
            Hello! I'm Kenny, a dog-loving, racoon-loving, business owner who
            enjoys gaming and programming. My long-term ambition is game server
            development. Currently, I am specializing in web development
            utilizing React and its vast ecosystem.
          </Text>
          <Text mb='2'>For more information, have a look at my resume (:</Text>
          <Link
            href={`${process.env.PUBLIC_URL}/assets/Kenny_Cao_ResumeUpdated06-26-22.pdf`}
            download
            style={{ textDecoration: 'none' }}
          >
            <Center
              mx='auto'
              mb='4'
              display='flex'
              gap='2'
              color='white'
              justifyContent='center'
              backgroundColor='orange.300'
              transition='all 200ms ease'
              width={['auto', '100px']}
              px='6'
              py='2'
              borderRadius='lg'
              shadow='base'
              _hover={{
                filter: 'brightness(1.1)',
                cursor: 'pointer',
              }}
            >
              <Icon as={AiOutlineFilePdf} />
              <Text>Resume</Text>
            </Center>
          </Link>
          <Box as='article' display={['none', null, 'block']}>
            <Text textAlign='center' fontWeight='bold' fontsize='md' mb='3'>
              Here's an image of my baby ❤️
            </Text>
            <Image
              mx='auto'
              mb='2'
              p='1'
              objectFit='cover'
              display='block'
              boxSize={['80px', '100px']}
              src={bibiImg}
              alt='Picture of my yorkie'
              borderRadius='50em'
              border='2px solid'
              borderColor='orange.100'
            />
            <Text fontStyle='italic' color='gray.500'>
              Fun Fact: Bibi, my baby yorkie, inspired the name of my business.
            </Text>
          </Box>
        </Box>
      </SlideFade>
    </Container>
  );
};

export default AboutMe;
