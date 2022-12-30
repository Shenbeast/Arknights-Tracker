import {
  ChakraProvider,
  Box,
  extendTheme
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import OperatorsGrid from './components/OperatorsGrid';

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
});

export const App = () => {
  return (
    <ChakraProvider theme={theme} >
      <Box marginTop="14" textAlign="center" fontSize="xl" style={{cursor: 'url(cursor.cur), auto'}}>
        <OperatorsGrid/>
      </Box>
    </ChakraProvider>
  );
}
