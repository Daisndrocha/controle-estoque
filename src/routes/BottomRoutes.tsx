import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Produto from '../pages/produto';
import Estoque from '../pages/estoque';
import SaidaProduto from '../pages/saida';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#123D2A',
        },
        headerTintColor: '#FFFFFF',
        tabBarActiveTintColor: '#123D2A',
        tabBarInactiveTintColor: '#888888',
        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 6,
        },
      }}
    >
      <Tab.Screen
        name="Produto"
        component={Produto}
        options={{
          title: 'Novo Produto',
          tabBarLabel: 'Produtos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Estoque"
        component={Estoque}
        options={{
          title: 'Controle de Estoque',
          tabBarLabel: 'Estoque',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube-outline" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="SaidaProduto"
        component={SaidaProduto}
        options={{
          title: 'Saída de Produto',
          tabBarLabel: 'Saídas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="arrow-up-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}