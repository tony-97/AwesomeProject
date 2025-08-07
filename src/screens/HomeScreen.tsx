import React, { useEffect, useState } from 'react';

import { View, FlatList, Button } from 'react-native';

import { fetchPokemonList } from '../api/pokeapi';

import { Pokemon } from '../types/pokemon';

import { PokemonItem } from '../components/PokemonItem';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/store';

import { addFavorite, removeFavorite } from '../store/actions';

import { StackNavigationProp } from '@react-navigation/stack';

import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const favorites = useSelector((state: RootState) => state.favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchPokemonList().then(setPokemon);
  }, []);

  return (
    <View>
      <Button
        title="View Favorites"
        onPress={() => navigation.navigate('Favorites')}
      />

      <FlatList
        data={pokemon}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PokemonItem
            pokemon={item}
            isFavorite={favorites.some(f => f.name === item.name)}
            onAdd={() => dispatch(addFavorite(item))}
            onRemove={() => dispatch(removeFavorite(item.name))}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
