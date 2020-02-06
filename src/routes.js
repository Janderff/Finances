import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Users from './pages/Users';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator
        initialRouteName="Users"
        screenOptions={{
          headerStyle: {backgroundColor: '#08081c'},
          headerTintColor: '#FFF',
          fontWeight: 'bold',
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Dashboard'}}
        />
        <Stack.Screen name="Users" component={Users} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}
