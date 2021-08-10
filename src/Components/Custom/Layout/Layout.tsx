import React from 'react';
import {useTheme} from 'react-native-paper';
import AppHeader from 'src/Components/Custom/AppHeader/AppHeader';
import Container from 'src/Components/Shared/Container/Container';
import Padding from 'src/Components/Shared/Padding/Padding';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import scaler from 'src/Utils/Shared/scaler';

function Layout({children}: any) {
  const theme = useTheme();
  return (
    <Container
      backgroundColor={theme.colors.winter}
      statusBarBackgroundColor={theme.colors.white}
      statusBarStyle={'dark-content'}>
      <AppHeader />
      <Padding size={scaler(16)} horizontal>
        <Spacer />
        {children}
        <Spacer size={scaler(16)} />
      </Padding>
      <Spacer />
    </Container>
  );
}
export default Layout;
