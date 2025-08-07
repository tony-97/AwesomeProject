import React, { useEffect, useState } from 'react';

import { View, FlatList, Button, Image, Text } from 'react-native';

import axios from 'axios';

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
  const [pokemon, setPokemon] = useState<any[]>([]);

  const favorites = useSelector((state: RootState) => state.favorites);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchList = async () => {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=50',
      );
      const results = response.data.results;
      // Fetch details for each pokemon
      const detailed = await Promise.all(
        results.map(async (p: any) => {
          const res = await axios.get(p.url);
          return res.data;
        }),
      );
      setPokemon(detailed);
    };
    fetchList();
  }, []);

  return (
    <View>
      <FlatList
        data={pokemon}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View
            style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}
          >
            <Image
              source={{ uri: item.sprites?.front_default }}
              style={{ width: 60, height: 60, marginRight: 12 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 18, textTransform: 'capitalize' }}>
                {item.name}
              </Text>
              <Text style={{ color: '#555' }}>
                {item.types.map((t: any) => t.type.name).join(', ')}
              </Text>
            </View>
            <Button
              title="Ver Detalle"
              onPress={() => navigation.navigate('Detail', { pokemon: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
