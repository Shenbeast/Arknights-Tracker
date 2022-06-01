import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import OperatorsGrid from './components/OperatorsGrid';

export const App = () => {
  return (
    <ChakraProvider theme={theme} >
      <ColorModeSwitcher justifySelf="flex-end" />
      <Box textAlign="center" fontSize="xl" style={{cursor: 'url(cursor.cur), auto'}}>
        <OperatorsGrid/>
      </Box>
    </ChakraProvider>
  );
}
