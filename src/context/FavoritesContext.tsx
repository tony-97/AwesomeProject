import React, { createContext, useState, ReactNode } from "react";

type Pokemon = {
  id: number;
  name: string;
  image: string;
};

type FavoritesContextType = {
  favorites: Pokemon[];
  addFavorite: (pokemon: Pokemon) => void;
  removeFavorite: (id: number) => void;
};

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Pokemon[]>([]);

  const addFavorite = (pokemon: Pokemon) => {
    setFavorites((prev) => [...prev, pokemon]);
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
