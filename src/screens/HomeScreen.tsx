import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import PokemonCard from "../components/PokemonCard";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`)
      .then((res) => res.json())
      .then(async (data) => {
        const details = await Promise.all(
          data.results.map((p: any) => fetch(p.url).then((res) => res.json()))
        );
        setPokemons((prev) => [...prev, ...details]);
        setLoading(false);
      });
  }, [page]);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PokemonCard
            pokemon={item}
            onPress={() =>
              navigation.navigate("PokemonDetail", { pokemon: item })
            }
          />
        )}
        onEndReached={() => setPage((p) => p + 1)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
      />
    </View>
  );
}
