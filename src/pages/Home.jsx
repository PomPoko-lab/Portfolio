import {
  Container,
  Heading,
  Text,
  Link,
  Box,
  Icon,
  Center,
  SlideFade,
} from '@chakra-ui/react';

import { AiFillMail } from 'react-icons/ai';

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
          mt={['6em', null, '10em', '17em']}
          mb={['5vh', '10vh']}
          display='flex'
          flexDirection='column'
          textAlign='center'
        >
          <Heading
            as='h1'
            letterSpacing='wide'
            color='gray.700'
            fontSize={['3xl', null, null, '4xl']}
            mb='6'
          >
            Kenny Cao
          </Heading>
          <Box
            as='section'
            display='flex'
            mx='auto'
            gap={['3', '5', '6']}
            mb='5'
            justifyContent='center'
          >
            <Text color='gray.600' fontSize='lg'>
              Web Developer
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
        <Link
          href='mailto:hello@pompoko.io'
          display='flex'
          gap='2'
          color='white'
          justifyContent='center'
          backgroundColor='orange.300'
          transition='all 200ms ease'
          width={['250px', 'auto']}
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
            <Icon as={AiFillMail} />
          </Center>
          <Text>hello@pompoko.io</Text>
        </Link>
      </SlideFade>
    </>
  );
};

export default MyInfo;
