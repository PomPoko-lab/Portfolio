import { Container, Box, Heading, SlideFade } from '@chakra-ui/react';
import projects from '../projects';

import ProjectItem from '../components/ProjectItem';

const Projects = () => {
  return (
    <Container as='section' textAlign='center' maxW='container.lg'>
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
        <Box display='flex' gap='5' justifyContent='center' flexWrap='wrap'>
          {projects.map((item) => (
            <ProjectItem key={item.id} project={item} />
          ))}
        </Box>
      </SlideFade>
    </Container>
  );
};

export default Projects;
