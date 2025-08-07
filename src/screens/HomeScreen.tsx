import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addFavorite, removeFavorite } from '../store/actions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import PokemonListItem from '../components/PokemonListItem';

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
          <PokemonListItem
            pokemon={item}
            onPress={() => navigation.navigate('Detail', { pokemon: item })}
            onRemove={() => dispatch(removeFavorite(item.name))}
            showRemove={favorites.some(f => f.name === item.name)}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
