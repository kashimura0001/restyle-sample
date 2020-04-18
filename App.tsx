import * as React from 'react';
import {useState} from 'react';
import {Switch} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme, darkTheme} from './app/theme';
import Text from './app/Text';
import Box from './app/Box';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <Box
        flex={1}
        alignItems={'center'}
        justifyContent={'center'}
        backgroundColor={'mainBackgroundColor'}>
        <Text variant="header">HELLO</Text>
        <Text variant="body">Welcome to ReactNative.</Text>
        <Box margin={'l'}>
          <Switch
            value={darkMode}
            onValueChange={(value: boolean) => setDarkMode(value)}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default App;
