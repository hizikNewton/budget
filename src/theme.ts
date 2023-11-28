import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'chakra-tabs__tab-indicator': {
        width: '2px',
      },
    },
  },
});

export default theme;
