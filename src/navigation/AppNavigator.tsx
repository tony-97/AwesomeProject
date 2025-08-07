import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

import FavoritesScreen from '../screens/FavoritesScreen';

import LoginScreen from '../screens/LoginScreen';
import DetailScreen from '../screens/DetailScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import MainTabs from './MainTabs';

export type RootStackParamList = {
  Login: undefined;
  Main: undefined;
  Favorites: undefined;
  Detail: { pokemon: any };
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
  const isLoggedIn = useSelector((state: RootState) => state.isLoggedIn);
  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
