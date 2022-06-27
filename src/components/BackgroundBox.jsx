import { Box } from '@chakra-ui/react';

const BackgroundBox = () => {
  return (
    <Box
      position='fixed'
      w='100vw'
      // h='100vh'
      h={`${window.innerHeight}px`}
      zIndex='-1'
      bgColor='#d9fcf5'
    />
  );
};

export default BackgroundBox;
