"use client";

import CityList from "@/components/CityList";
import Favorites from "@/components/Favorites";
import WeatherCard from "@/components/WeatherCard";
import { getCities, getCityDetails } from "@/lib/actions/city.actions";
import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
} from "@/lib/actions/city.actions.client";
import { getWeather } from "@/lib/actions/weather.actions";
import { sanitizeCityArray } from "@/lib/tools";
import { City, CityDetails, Weather } from "@/lib/types/city.type";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [city, setCity] = useState<string>("");
  const [cities, setCities] = useState<City[]>([]);
  const [cityDetails, setCityDetails] = useState<CityDetails | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [favorites, setFavorites] = useState<CityDetails[]>([]);

  const handleAddToFavorites = (cityDetails: CityDetails) => {
    setFavorites([...favorites, cityDetails]);
    addToFavorites(cityDetails);
  };

  const handleRemoveFromFavorites = (cityDetails: CityDetails) => {
    setFavorites(
      favorites.filter((favorite) => favorite.place_id !== cityDetails.place_id)
    );
    removeFromFavorites(cityDetails);
  };

  const handleSearch = useCallback(async () => {
    const cities = await getCities(city);
    if (cities.predictions.length > 0) {
      setCities(sanitizeCityArray(cities.predictions));
    } else {
      setCities([]);
    }
  }, [city]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleCityClick = useCallback(async (cityCalled: City) => {
    const cityDetailsResponse = await getCityDetails(cityCalled.place_id);
    setCityDetails({ ...cityCalled, ...cityDetailsResponse.result });
    if (cityDetailsResponse) {
      const weatherResponse = await getWeather(cityDetailsResponse.result);
      setWeather(weatherResponse);
      setCity("");
    }
  }, []);

  useEffect(() => {
    console.log("click");
    if (city.length > 3 || city.length === 0) {
      handleSearch();
    }
  }, [city, handleSearch, handleCityClick]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <WeatherCard
        weather={weather}
        cityDetails={cityDetails}
        addToFavorites={handleAddToFavorites}
      />
      <div className=" w-full flex items-center justify-center">
        <input
          type="search"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full px-4 py-4 border border-foreground bg-background rounded-lg"
        />
      </div>
      <CityList cities={cities} cityClick={handleCityClick} />
      <Favorites
        favorites={favorites}
        cityClick={handleCityClick}
        removeFromFavorites={handleRemoveFromFavorites}
      />
    </div>
  );
}
