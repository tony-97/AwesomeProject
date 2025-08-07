import React from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';

import { Pokemon } from '../types/pokemon';

interface Props {
  pokemon: Pokemon;

  isFavorite: boolean;

  onAdd: () => void;

  onRemove: () => void;
}

export const PokemonItem: React.FC<Props> = ({
  pokemon,

  isFavorite,

  onAdd,

  onRemove,
}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{pokemon.name}</Text>

    {isFavorite ? (
      <Button title="Remove" onPress={onRemove} />
    ) : (
      <Button title="Add" onPress={onAdd} />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  text: { fontSize: 16 },
});
