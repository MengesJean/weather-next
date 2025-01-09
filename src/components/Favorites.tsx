import { CityDetails } from "@/lib/types/city.type";

interface FavoritesProps {
  favorites: CityDetails[];
  cityClick: (city: CityDetails) => void;
  removeFromFavorites: (city: CityDetails) => void;
}

const Favorites = ({
  favorites,
  cityClick,
  removeFromFavorites,
}: FavoritesProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mt-4">Favorites</h2>
      <ul className="flex flex-col gap-4 mt-4">
        {favorites.length > 0 &&
          favorites.map((city) => {
            return (
              <li
                key={`${city.place_id}`}
                className="py-4 px-3 border border-foreground bg-foreground text-background rounded-lg hover:bg-background hover:text-foreground transition-all duration-300 cursor-pointer flex justify-between items-center"
                onClick={() => cityClick(city)}
              >
                {city.description}
                <button
                  className="bg-red-500 text-white rounded-lg px-2 py-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromFavorites(city);
                  }}
                >
                  Remove
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Favorites;
