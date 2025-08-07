import React from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { removeFavorite } from '../store/actions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import PokemonListItem from '../components/PokemonListItem';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Favorites'>;
};

const FavoritesScreen: React.FC<Props> = ({ navigation }) => {
  const favorites = useSelector((state: RootState) => state.favorites);
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={favorites}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PokemonListItem
            pokemon={item}
            onPress={() => navigation.navigate('Detail', { pokemon: item })}
            onRemove={() => dispatch(removeFavorite(item.name))}
            showRemove
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
