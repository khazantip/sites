import { useParams } from "react-router-dom";
import { serverResponse } from "../api/config";

const DetailsPages = () => {
  const { id } = useParams();
  const fotocars = serverResponse.photos.find(
    (element) => element.id.toString() === id
  );

  if (fotocars === undefined) {
    return <div className="text-6xl">Машина с id {id} не найдена</div>;
  }

  return (
    <div className="flex justify-center flex-col bg-slate-500  w-200 aspect-video relative">
      <img src={fotocars.img_src} alt="car" className="" />
      <div className="absolute">
        <p className="text-3xl font-bold">Модель: {fotocars.name}</p>
        <p className="text-xl">Цена: {fotocars.price} руб.</p>
        <p>Год выпуска: {fotocars.year}</p>
      </div>
    </div>
  );
};

export default DetailsPages;
