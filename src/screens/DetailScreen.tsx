import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/actions';
import { RootState } from '../store/store';
import { Pokemon } from '../types/pokemon';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
  route: RouteProp<RootStackParamList, 'Detail'>;
};

const DetailScreen: React.FC<Props> = ({ route }) => {
  const { pokemon } = route.params;
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.some(f => f.name === pokemon.name);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: pokemon.sprites?.other['official-artwork'].front_default,
        }}
        style={styles.image}
      />
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.types}>
        Tipos: {pokemon.types.map(t => t.type.name).join(', ')}
      </Text>
      <Text style={styles.section}>Estadísticas:</Text>
      {pokemon.stats.map(stat => (
        <Text key={stat.stat.name}>
          {stat.stat.name}: {stat.base_stat}
        </Text>
      ))}
      <Text style={styles.section}>Habilidades:</Text>
      {pokemon.abilities.map(a => (
        <Text key={a.ability.name}>{a.ability.name}</Text>
      ))}
      <Button
        title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        onPress={() =>
          isFavorite
            ? dispatch(removeFavorite(pokemon.name))
            : dispatch(addFavorite(pokemon))
        }
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'capitalize',
  },
  types: {
    fontSize: 18,
    marginBottom: 12,
  },
  section: {
    fontSize: 20,
    marginTop: 16,
    fontWeight: 'bold',
  },
});

export default DetailScreen;
