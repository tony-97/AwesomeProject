import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

import FavoritesScreen from '../screens/FavoritesScreen';

import LoginScreen from '../screens/LoginScreen';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;

  Favorites: undefined;
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
          <Stack.Screen name="Home" component={HomeScreen} />

          <Stack.Screen name="Favorites" component={FavoritesScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
