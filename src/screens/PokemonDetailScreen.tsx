import React, { useContext } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";

export default function PokemonDetailScreen({ route }: any) {
  const { pokemon } = route.params;
  const { favorites, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = favorites.some((f) => f.id === pokemon.id);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: pokemon.sprites.other["official-artwork"].front_default,
        }}
        style={styles.image}
      />
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text>
        Tipos: {pokemon.types.map((t: any) => t.type.name).join(", ")}
      </Text>
      <Text>
        Habilidades:{" "}
        {pokemon.abilities.map((a: any) => a.ability.name).join(", ")}
      </Text>
      <Text>Estadísticas:</Text>
      {pokemon.stats.map((s: any) => (
        <Text key={s.stat.name}>
          {s.stat.name}: {s.base_stat}
        </Text>
      ))}
      <Button
        title={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        onPress={() =>
          isFavorite
            ? removeFavorite(pokemon.id)
            : addFavorite({
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.front_default,
              })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  image: { width: 150, height: 150 },
  name: { fontWeight: "bold", fontSize: 24, marginVertical: 10 },
});
