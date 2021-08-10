import React from 'react';
import Body from 'src/Components/Shared/Body/Body';
import Container from 'src/Components/Shared/Container/Container';
import Padding from 'src/Components/Shared/Padding/Padding';
import scaler from 'src/Utils/Shared/scaler';
import Dashboard from './Components/Dashboard/Dashboard';

function DashboardScreen() {
  return (
    <Container
      backgroundColor={'lightgrey'}
      statusBarBackgroundColor={'lightgrey'}
      statusBarStyle={'dark-content'}>
      <Padding size={scaler(20)} flex={1} horizontal>
        <Body>
          <Dashboard />
        </Body>
      </Padding>
    </Container>
  );
}

export default DashboardScreen;
