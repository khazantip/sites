import { useNavigate } from "react-router-dom";

const Product = ({ fotocars }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col bg-slate-500 hover:bg-red-100 w-96 aspect-video"
      onClick={() => navigate(`/details/${fotocars.id}`)}
    >
      <img src={fotocars.img_src} alt="car" />
      <div className="text-xl">
        <p>Модель: {fotocars.name}</p>
        <p>Цена: {fotocars.price} руб.</p>
        <p>Год выпуска: {fotocars.year}</p>
      </div>
    </div>
  );
};

export default Product;
