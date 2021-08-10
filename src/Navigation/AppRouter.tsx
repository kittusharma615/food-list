import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './StackNavigators/RootStackNavigator';
import {useAppValue} from 'src/Recoil/Atoms/appAtom';

function AppRouter() {
  useAppValue();
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}

export default AppRouter;
