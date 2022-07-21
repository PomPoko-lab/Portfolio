import { Box, Heading, Text, Link, Icon, Image } from '@chakra-ui/react';
import { AiFillGithub, AiFillFolderOpen } from 'react-icons/ai';

const ProjectItem = ({ project }) => {
  return (
    <Box
      as='article'
      color='gray.700'
      background='linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.7))'
      border='1px solid white'
      shadow='lg'
      borderRadius='md'
      display='flex'
      flexDirection={['column', null, null, 'row-reverse']}
      w={['250px', null, null, '850px']}
      h={['600px', null, null, 'auto']}
      textAlign='left'
      overflow='hidden'
    >
      <Image
        w='500px'
        h='370px'
        objectFit='cover'
        objectPosition='center'
        src={`${process.env.PUBLIC_URL}${project.imgSrc}`}
        loading='lazy'
      />
      <Box
        as='section'
        display='flex'
        flexDirection='column'
        p='5'
        pb='2'
        fontSize='sm'
        h='full'
      >
        <Heading mb='2' fontSize='md'>
          {project.title}
        </Heading>
        <Text mb='auto' pb='3'>
          {project.desc}
        </Text>
        <Box display='block' mb='2'>
          <Box display='flex' gap='1'>
            <Text fontWeight='bold'>Designed by:</Text>
            <Text>{project.designer}</Text>
          </Box>
          <Box display='flex' gap='1'>
            <Text fontWeight='bold'>Coded by:</Text>
            <Text>{project.coder}</Text>
          </Box>
        </Box>
        <Box display='flex' gap='2' mb='3' flexWrap='wrap'>
          {project.techs.map((item, index) => (
            <Text
              key={`id-${index}`}
              color='whiteAlpha.800'
              background='orange.300'
              borderRadius='lg'
              display='inline'
              fontSize='sm'
              py='1'
              px='2'
              shadow='base'
            >
              {item}
            </Text>
          ))}
        </Box>
        <Box>
          <Link isExternal href={project.src}>
            <Icon boxSize='30px' as={AiFillGithub} me='3' />
          </Link>
          <Link isExternal href={project.demo}>
            <Icon boxSize='30px' as={AiFillFolderOpen} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectItem;
