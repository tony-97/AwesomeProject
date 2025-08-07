import React from 'react';
import { View, Image, Text, Button, TouchableOpacity } from 'react-native';

interface PokemonType {
  type: { name: string };
}

interface Pokemon {
  name: string;
  sprites?: { front_default?: string };
  types?: PokemonType[];
}

interface Props {
  pokemon: Pokemon;
  onPress: () => void;
  onRemove?: () => void;
  showRemove?: boolean;
}

const PokemonListItem: React.FC<Props> = ({
  pokemon,
  onPress,
  onRemove,
  showRemove,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}
    activeOpacity={0.7}
  >
    <Image
      source={{ uri: pokemon.sprites?.front_default }}
      style={{ width: 60, height: 60, marginRight: 12 }}
    />
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 18, textTransform: 'capitalize' }}>
        {pokemon.name}
      </Text>
      <Text style={{ color: '#555' }}>
        {pokemon.types?.map(t => t.type.name).join(', ')}
      </Text>
    </View>
    {showRemove && onRemove && (
      <Button title="Quitar" onPress={onRemove} color="#d00" />
    )}
  </TouchableOpacity>
);

export default PokemonListItem;
