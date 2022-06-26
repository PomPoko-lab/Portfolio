import {
  Container,
  UnorderedList,
  ListItem,
  Link,
  SlideFade,
  Image,
} from '@chakra-ui/react';

import pomImg from '../assets/RosePomMain.jpg';

const MainNav = ({ setCurrentPage }) => {
  return (
    <Container as='nav' maxW='container.xl' mt='5'>
      <SlideFade
        in
        offsetY='-40px'
        transition={{ enter: { duration: 1 } }}
        unmountOnExit
      >
        <UnorderedList
          mx='auto'
          display='flex'
          alignItems='center'
          styleType='none'
          maxW='container.xl'
          color='gray.600'
          fontSize='lg'
        >
          <ListItem me='auto'>
            <Image
              my='auto'
              p='1px'
              objectFit='cover'
              boxSize='50px'
              src={pomImg}
              alt='Pom Poko Ava'
              borderRadius='50em'
              border='2px solid'
              borderColor='orange.100'
              onClick={() => {
                setCurrentPage('Home');
              }}
              _hover={{ cursor: 'pointer' }}
            />
          </ListItem>
          <ListItem>
            <Link
              transition='all 200ms ease'
              px={['2', '6']}
              py={['1', '3']}
              borderRadius='lg'
              _hover={{
                color: 'orange.300',
                background:
                  'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.5))',
              }}
              style={{ textDecoration: 'none' }}
              onClick={() => {
                setCurrentPage('AboutMe');
              }}
            >
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link
              transition='all 200ms ease'
              px={['2', '6']}
              py={['1', '3']}
              borderRadius='lg'
              _hover={{
                color: 'orange.300',
                background:
                  'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.5))',
              }}
              style={{ textDecoration: 'none' }}
              onClick={() => {
                setCurrentPage('Projects');
              }}
            >
              Projects
            </Link>
          </ListItem>
        </UnorderedList>
      </SlideFade>
    </Container>
  );
};

export default MainNav;
