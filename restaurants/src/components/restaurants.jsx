import { useNavigate } from "react-router-dom";

const Restaurants = ({ fotoRes }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex h-3/5 bg-slate-400 gap-4 cursor-pointer rounded-lg"
      onClick={() => navigate(`/details/${fotoRes.id}`)}
    >
      <div className="">
        <img
          src={fotoRes.img}
          alt="foto"
          className="m-2 aspect-square rounded-lg bg-contain"
        />
      </div>
      <div className="flex flex-col justify-between p-2.5">
        <h2 className="text-2xl mb-2 font-bold">{fotoRes.name}</h2>
        <p>{fotoRes.deckription}</p>
        <div className="flex justify-between pb-2 pt-1.5">
          <div>
            <p className="font-bold">Телефон</p> <p>{fotoRes.tel}</p>
          </div>
          <div>
            <p className="font-bold">Средний чек</p> <p>{fotoRes.price}</p>
          </div>
          <div>
            <p className="font-bold">Время работы</p> <p>{fotoRes.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
