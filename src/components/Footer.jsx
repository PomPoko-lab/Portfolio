import { Container, Box, Text, Link, Center, Icon } from '@chakra-ui/react';

import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Container
      as='footer'
      py='2'
      mt='auto'
      display='flex'
      flexDirection={['column', null, 'row']}
      alignItems='center'
      maxW='container.md'
    >
      <Center as='section' gap={['2', '3', '6', '10']} me={['0', null, 'auto']}>
        <Link isExternal href='#'>
          <Icon as={AiOutlineLinkedin} boxSize='30px' color='teal.100' />
        </Link>
        <Link isExternal href='#'>
          <Icon as={AiOutlineFacebook} boxSize='30px' color='teal.100' />
        </Link>
        <Link isExternal href='https://github.com/PomPoko-lab'>
          <Icon as={AiOutlineGithub} boxSize='30px' color='teal.100' />
        </Link>
        <Link isExternal href='mailto:hello@pompoko.io'>
          <Icon as={AiOutlineMail} boxSize='30px' color='teal.100' />
        </Link>
      </Center>
      <Box mt='auto' display='flex' alignItems='center'>
        <Icon
          boxSize='12px'
          as={AiOutlineCopyrightCircle}
          color='teal.100'
          me={['0', '2']}
          mb={['auto', '0']}
        />
        <Text
          textAlign='center'
          fontSize='x-small'
          letterSpacing='0.3em'
          color='teal.100'
        >
          Crafted by CraftyBi aka Pom Poko
        </Text>
      </Box>
    </Container>
  );
};

export default Footer;
