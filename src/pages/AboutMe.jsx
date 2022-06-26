import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  SlideFade,
} from '@chakra-ui/react';

import myImg from '../assets/MeCropped.jpg';

const AboutMe = () => {
  return (
    <Container as='section' textAlign='center'>
      <SlideFade
        style={{ marginTop: '3em' }}
        in
        offsetY='-15px'
        transition={{ enter: { duration: 0.5 } }}
        unmountOnExit
      >
        <Box
          py='1'
          borderBottom='1px solid white'
          mb='6'
          mt={['3em', 'null', '5em']}
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
          color='gray.700'
          p='6'
          background='linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.6))'
          border='1px solid white'
          shadow='lg'
          borderRadius='md'
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi
            sint iure nihil ut exercitationem at. Minus, incidunt laborum
            voluptatum voluptas quibusdam eius non, omnis, molestiae vero
            tempora autem ratione. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut, exercitationem id enim eaque accusamus
            debitis similique minus corporis pariatur. Iure mollitia
            voluptatibus ratione nostrum adipisci ex quam natus in quos!
          </Text>
        </Box>
      </SlideFade>
    </Container>
  );
};

export default AboutMe;
