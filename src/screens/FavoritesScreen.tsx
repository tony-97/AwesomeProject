import React, { useContext } from "react";
import { View, FlatList, Text, Image, Button } from "react-native";
import { FavoritesContext } from "../context/FavoritesContext";

export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <Text style={{ textAlign: "center", marginTop: 20 }}>
        No hay favoritos
      </Text>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          <Text style={{ flex: 1 }}>{item.name}</Text>
          <Button title="Eliminar" onPress={() => removeFavorite(item.id)} />
        </View>
      )}
    />
  );
}
