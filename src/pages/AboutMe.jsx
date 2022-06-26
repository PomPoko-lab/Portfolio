import { Container, Heading, Text, SlideFade } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Container as='section'>
      <Heading
        as='h2'
        py='3'
        borderBottom='1px solid white'
        letterSpacing='wide'
        color='teal.800'
        fontSize={['3xl', null, null, '4xl']}
        mb='6'
        mt={['3em', 'null', '5em']}
      >
        <SlideFade
          in
          offsetY='-15px'
          transition={{ enter: { duration: 0.5 } }}
          unmountOnExit
        >
          About Me
        </SlideFade>
      </Heading>
      <SlideFade
        in
        offsetY='-15px'
        transition={{ enter: { duration: 0.5, delay: 0.4 } }}
        unmountOnExit
      >
        <Text
          p='6'
          background='linear-gradient(rgba(255,255,255,0.4),rgba(255,255,255,0.6))'
          color='teal.900'
          border='1px solid white'
          shadow='lg'
          borderRadius='md'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nisi
          sint iure nihil ut exercitationem at. Minus, incidunt laborum
          voluptatum voluptas quibusdam eius non, omnis, molestiae vero tempora
          autem ratione. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aut, exercitationem id enim eaque accusamus debitis similique
          minus corporis pariatur. Iure mollitia voluptatibus ratione nostrum
          adipisci ex quam natus in quos!
        </Text>
      </SlideFade>
    </Container>
  );
};

export default AboutMe;
