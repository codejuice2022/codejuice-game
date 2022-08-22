import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Intro from './screens/Intro';
import PickingStep from './screens/PickingStep';

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="PickingStep" component={PickingStep} />
    </Stack.Navigator>
  );
};

export default Router;
