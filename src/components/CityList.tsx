import { City } from "@/lib/types/city.type";

interface CityListProps {
  cities: City[] | [];
  cityClick: (city: City) => void;
}

const CityList = ({ cities, cityClick }: CityListProps) => {
  return (
    <div>
      <ul className="flex flex-col gap-4 mt-4">
        {cities.length > 0 &&
          cities.map((city) => {
            return (
              <li
                key={`${city.place_id}`}
                className="py-4 px-3 border border-foreground bg-foreground text-background rounded-lg hover:bg-background hover:text-foreground transition-all duration-300 cursor-pointer"
                onClick={() => cityClick(city)}
              >
                {city.description}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CityList;
