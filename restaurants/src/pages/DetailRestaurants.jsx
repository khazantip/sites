import { serverResponse } from "../api/config";
import { useParams, useNavigate } from "react-router-dom";

const DetailRestaurants = () => {
  const { id } = useParams();
  const fotoRestaurants = serverResponse.restaurants.find(
    (element) => element.id.toString() === id
  );

  const navi = useNavigate();

  if (fotoRestaurants === undefined) {
    return <div>Ресторан с id{id} не найден</div>;
  }

  return (
    <div className="flex">
      <div className="flex flex-col ">
        <button
          className="flex justify-end border-2 rounded-lg text-end"
          onClick={() => navi("/")}
        >
          Назад
        </button>
        <div className="flex flex-col justify-center items-center">
          <h2 className=" text-xl font-sans font-bold">Адрес: бул.Цанова,1</h2>
          <img
            src={fotoRestaurants.img}
            alt="foto"
            className="m-2 aspect-square rounded-lg bg-contain w-64"
          />
        </div>
        <div className="flex flex-col justify-between p-2.5">
          <h2 className="text-2xl mb-2 font-bold">{fotoRestaurants.name}</h2>
          <p>{fotoRestaurants.deckription}</p>
          <div className="flex justify-between pb-2 pt-1.5">
            <div>
              <p className="font-bold">Телефон</p> <p>{fotoRestaurants.tel}</p>
            </div>
            <div>
              <p className="font-bold">Средний чек</p>
              <p>{fotoRestaurants.price}</p>
            </div>
            <div>
              <p className="font-bold">Время работы</p>
              <p>{fotoRestaurants.time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRestaurants;
