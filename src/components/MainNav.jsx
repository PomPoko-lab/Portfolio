import {
  Container,
  UnorderedList,
  ListItem,
  Link,
  SlideFade,
  Image,
} from '@chakra-ui/react';

import { Link as routerLink } from 'react-router-dom';

import pomImg from '../assets/RosePomMain.webp';

const MainNav = () => {
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
            <Link as={routerLink} to='/' _hover={{ cursor: 'pointer' }}>
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
              />
            </Link>
          </ListItem>
          <ListItem>
            <Link
              as={routerLink}
              to='/about'
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
            >
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link
              as={routerLink}
              to='/projects'
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
