import { isFavorite } from "@/lib/actions/city.actions.client";
import { cn, getTemperatureColor } from "@/lib/tools";
import { CityDetails, Weather } from "@/lib/types/city.type";

interface WeatherCardProps {
  weather?: Weather | null;
  cityDetails?: CityDetails | null;
  addToFavorites: (cityDetails: CityDetails) => void;
}

const WeatherCard = ({
  weather,
  cityDetails,
  addToFavorites,
}: WeatherCardProps) => {
  return (
    <div
      className={cn(
        "min-h-[300px] bg-gradient-to-r from-background to-indigo-900 w-full flex items-center p-8 mb-4 rounded-lg",
        `${getTemperatureColor(weather?.main.feels_like)}`
      )}
    >
      {weather && (
        <div>
          <h1 className="text-2xl font-bold">{cityDetails?.description}</h1>
          <div>
            <p>Temperature</p>
            <p>{weather.main.temp}°C</p>
          </div>
          <div>
            <p>Ressentiment</p>
            <p>{weather.main.feels_like}°C</p>
          </div>
          <div>
            <p>Conditions météo</p>
            <p>{weather.weather[0].description}</p>
          </div>
          {cityDetails && !isFavorite(cityDetails) && (
            <button
              className="border border-white text-white rounded-lg px-4 py-2 mt-2"
              onClick={() => addToFavorites(cityDetails)}
            >
              Add to favorites
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
