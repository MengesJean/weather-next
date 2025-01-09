export interface City {
  description: string;
  place_id: string;
}

export interface CityDetails {
  name: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  description: string;
  place_id: string;
}

export interface Weather {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}
