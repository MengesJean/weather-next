"use client";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { City } from "./types/city.type";

export const sanitizeCityArray = (cities: Record<string, string>[]) => {
  const sanitizedCities: City[] = [];
  cities.map((city) => {
    if (sanitizedCities.find((c) => c.place_id === city.place_id)) {
      return null;
    }
    sanitizedCities.push({
      description: city.description,
      place_id: city.place_id,
    });
  });
  return sanitizedCities;
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const temperaturesColors = [
  {
    range: [-99, 0],
    color: "to-cyan-200",
  },
  {
    range: [0, 10],
    color: "to-blue-500",
  },
  {
    range: [10, 20],
    color: "to-green-500",
  },
  {
    range: [20, 30],
    color: "to-yellow-500",
  },
  {
    range: [30, 40],
    color: "to-red-500",
  },
];

export const getTemperatureColor = (temperature: number | undefined) => {
  if (!temperature) {
    return "to-blue-500";
  }
  return temperaturesColors.find((color) => {
    if (temperature) {
      return temperature >= color.range[0] && temperature <= color.range[1];
    }
  })?.color;
};
