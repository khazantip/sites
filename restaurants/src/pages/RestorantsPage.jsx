import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const { serverResponse } = require("../api/config");
const { default: Restaurants } = require("../components/restaurants");

const RestaurantsMenu = () => {
  const resData = serverResponse;
  const [searchParams, setSearchParams] = useSearchParams();

  const [filteredRest, setFilteredRest] = useState([]);
  useEffect(() => {
    const searchText = searchParams.get("search")?.toLowerCase();
    setFilteredRest(
      resData?.restaurants.filter(
        (element) =>
          element.name.toLowerCase().includes(searchText) ||
          element.deckription.toLowerCase().includes(searchText) ||
          searchText?.length === 0
      )
    );
  }, [searchParams]);

  return (
    <div className="flex justify-center gap-3 flex-col">
      {filteredRest.map((restaurants) => (
        <Restaurants key={restaurants.id} fotoRes={restaurants} />
      ))}
    </div>
  );
};

export default RestaurantsMenu;
