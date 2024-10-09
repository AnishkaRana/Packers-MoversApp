import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PackersMoversScreen from './components/PackersMoversScreen';
import RepairScreen from './components/RepairScreen';
import HomeScreen from './components/HomeScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PackersMovers">
        <Stack.Screen
          name="PackersMovers"
          component={PackersMoversScreen}
          options={{ headerShown: false }}  // Hide the header bar
        />
        <Stack.Screen
          name="Repair"
          component={RepairScreen}
          options={{ headerShown: false }}  // Hide the header bar
        />
         <Stack.Screen
          name="Home"
          component={HomeScreen} // Add HomeScreen to the navigator
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
