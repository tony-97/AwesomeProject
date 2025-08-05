import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function PokemonCard({
  pokemon,
  onPress,
}: {
  pokemon: any;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: pokemon.sprites.front_default }}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text>{pokemon.types.map((t: any) => t.type.name).join(", ")}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
  },
  image: { width: 50, height: 50, marginRight: 10 },
  name: { fontWeight: "bold", fontSize: 16 },
});
