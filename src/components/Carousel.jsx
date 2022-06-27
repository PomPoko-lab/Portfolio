import { Flex, Box, Text, HStack } from '@chakra-ui/react';
import ProjectItem from './ProjectItem';

import { useState } from 'react';

const Carousel = ({ slides }) => {
  const arrowStyles = {
    cursor: 'pointer',
    pos: 'absolute',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    p: '16px',
    color: 'orange.400',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    userSelect: 'none',
    _hover: {
      opacity: 0.8,
      bg: 'black',
    },
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex w='100%' alignItems='center' justifyContent='center'>
      <Flex w={['300px', null, null, '850px']} overflow='hidden' pos='relative'>
        <Flex {...carouselStyle}>
          {slides.map((item) => (
            <ProjectItem key={item.id} project={item} />
          ))}
        </Flex>
        <Text {...arrowStyles} left='0' onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right='0' onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify='center' pos='absolute' bottom='8px' w='full'>
          {Array.from({
            length: slidesCount,
          }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor='pointer'
              boxSize={['7px', null, '15px']}
              m='0 2px'
              bg={currentSlide === slide ? 'blackAlpha.800' : 'blackAlpha.500'}
              rounded='50%'
              display='inline-block'
              transition='background-color 0.6s ease'
              _hover={{
                bg: 'blackAlpha.800',
              }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Carousel;
