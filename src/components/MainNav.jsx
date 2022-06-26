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
          justifyContent={['space-between', 'flex-start']}
          alignItems='center'
          styleType='none'
          maxW='container.xl'
          color='gray.600'
          fontSize='lg'
        >
          <ListItem>
            <Link
              transition='all 300ms ease'
              px={['4', '6']}
              py={['2', '3']}
              borderRadius='lg'
              _hover={{
                color: 'orange.300',
                background:
                  'linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.5))',
              }}
              style={{ textDecoration: 'none' }}
              onClick={() => {
                setCurrentPage('Home');
              }}
            >
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              transition='all 200ms ease'
              px={['4', '6']}
              py={['2', '3']}
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
          <ListItem ms='auto' me='5'>
            <Link
              color='white'
              backgroundColor='orange.300'
              transition='all 200ms ease'
              px='6'
              py='3'
              borderRadius='lg'
              shadow='base'
              _hover={{
                filter: 'brightness(1.1)',
              }}
              style={{ textDecoration: 'none' }}
              onClick={() => {
                setCurrentPage('Projects');
              }}
            >
              Projects
            </Link>
          </ListItem>
          <Image
            my='auto'
            p='1px'
            display={['none', 'block']}
            objectFit='cover'
            boxSize='50px'
            src={pomImg}
            alt='Pom Poko Ava'
            borderRadius='50em'
            border='2px solid'
            borderColor='orange.100'
          />
        </UnorderedList>
      </SlideFade>
    </Container>
  );
};

export default MainNav;
