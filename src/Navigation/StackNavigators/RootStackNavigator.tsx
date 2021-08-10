import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from 'src/Screens/Dashboard/DashboardScreen';

const RootStack = createStackNavigator();

function RootStackNavigator() {
  console.log('RootStack');
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
