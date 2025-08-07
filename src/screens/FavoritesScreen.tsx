import React from 'react';
import { View, FlatList, Image, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { removeFavorite } from '../store/actions';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

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
            <Button
              title="Quitar"
              onPress={() => dispatch(removeFavorite(item.name))}
              color="#d00"
            />
          </View>
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
