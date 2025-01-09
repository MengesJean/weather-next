"use server";

export const getCities = async (city: string) => {
  // Use google maps api to get the cities
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?fields=formatted_address,geometry&input=${city}&inputtype=textquery&key=${process.env.GOOGLE_MAPS_API_KEY}`
  );
  return response.json();
};

export const getCityDetails = async (place_id: string) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${process.env.GOOGLE_MAPS_API_KEY}`
  );
  return response.json();
};
