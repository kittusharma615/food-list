import React from 'react';
import CacheProvider from 'src/Components/Shared/CacheProvider/CacheProvider';
import {ThemeProvider} from 'react-native-paper';
import AppRouter from './Navigation/AppRouter';
import {DayTheme} from './Constants/Theme';
import {RecoilRoot} from 'recoil';

function App() {
  console.log('App');
  return (
    <CacheProvider>
      <ThemeProvider theme={DayTheme}>
        <RecoilRoot>
          <AppRouter />
        </RecoilRoot>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
