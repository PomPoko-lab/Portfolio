import { Container, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Container as='footer' py='1' mt='auto'>
      <Text
        textAlign='center'
        fontSize='x-small'
        letterSpacing='0.3em'
        color='teal.100'
      >
        Crafted by CraftyBi aka Pom Poko
      </Text>
    </Container>
  );
};

export default Footer;
