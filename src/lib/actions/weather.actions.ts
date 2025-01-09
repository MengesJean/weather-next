"use server";

import { CityDetails } from "../types/city.type";

export const getWeather = async (city: CityDetails) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${city.geometry.location.lat}&lon=${city.geometry.location.lng}&units=metric&lang=fr&appid=${process.env.OPENWEATHER_API_KEY}`
  );
  return response.json();
};
