import React from 'react';

import { View, FlatList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store/store';

import { removeFavorite } from '../store/actions';

import { PokemonItem } from '../components/PokemonItem';

const FavoritesScreen: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites);

  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={favorites}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PokemonItem
            pokemon={item}
            isFavorite
            onAdd={() => {}}
            onRemove={() => dispatch(removeFavorite(item.name))}
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
