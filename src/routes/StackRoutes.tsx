import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomRoutes from './BottomRoutes';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Principal"
        component={BottomRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}