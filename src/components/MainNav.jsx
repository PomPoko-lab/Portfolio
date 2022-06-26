import {
  Container,
  UnorderedList,
  ListItem,
  Link,
  SlideFade,
} from '@chakra-ui/react';

const MainNav = ({ setCurrentPage }) => {
  return (
    <Container
      as='nav'
      maxW='container.xl'
      py='2'
      mt='10'
      mb={['15em', null, null, null, '15em']}
    >
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
          styleType='none'
          maxW='container.xl'
          letterSpacing='wider'
          color='teal.500'
          fontSize='lg'
        >
          <ListItem>
            <Link
              transition='all 300ms ease'
              px={['4', '6']}
              py={['2', '3']}
              borderRadius='lg'
              _hover={{
                color: 'teal.300',
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
                color: 'teal.300',
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
          <ListItem ms='auto'>
            <Link
              color='gray.100'
              backgroundColor='teal.300'
              transition='all 200ms ease'
              px={['4', '6']}
              py={['2', '3']}
              borderRadius='lg'
              _hover={{
                filter: 'brightness(1.1)',
                scale: '1.2',
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
