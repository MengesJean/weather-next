"use client";

import { CityDetails } from "../types/city.type";

export const addToFavorites = (cityDetails: CityDetails) => {
  if (typeof localStorage !== "undefined") {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    favorites.push(cityDetails);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

export const getFavorites = () => {
  if (typeof localStorage !== "undefined") {
    return JSON.parse(
      localStorage.getItem("favorites") || "[]"
    ) as CityDetails[];
  }
  return [];
};

export const removeFromFavorites = (cityDetails: CityDetails) => {
  if (typeof localStorage !== "undefined") {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const newFavorites = favorites.filter(
      (favorite: CityDetails) => favorite.place_id !== cityDetails.place_id
    );
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
  }
};

export const isFavorite = (cityDetails: CityDetails) => {
  const favorites = getFavorites();
  return favorites.some(
    (favorite) => favorite.place_id === cityDetails.place_id
  );
};
