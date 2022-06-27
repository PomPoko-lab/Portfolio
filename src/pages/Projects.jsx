import { Container, Box, Heading, SlideFade } from '@chakra-ui/react';
import projects from '../projects';
import Carousel from '../components/Carousel';

const Projects = () => {
  return (
    <Container
      as='section'
      textAlign='center'
      maxW='container.lg'
      p={['0', null, 'auto']}
    >
      <SlideFade
        style={{ marginTop: '3em' }}
        in
        offsetY='-15px'
        transition={{ enter: { duration: 0.5 } }}
        unmountOnExit
      >
        <Box py='1' borderBottom='1px solid white' mb='6'>
          <Heading
            as='h2'
            letterSpacing='wide'
            color='gray.700'
            fontSize={['3xl', null, null, '4xl']}
          >
            Featured Projects
          </Heading>
        </Box>
        <SlideFade
          style={{ marginTop: '3em' }}
          in
          offsetY='-15px'
          transition={{ enter: { duration: 0.5, delay: 0.4 } }}
          unmountOnExit
        >
          <Carousel slides={projects} />
        </SlideFade>
      </SlideFade>
    </Container>
  );
};

export default Projects;
