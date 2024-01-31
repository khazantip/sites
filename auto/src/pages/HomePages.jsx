import { serverResponse } from "../api/config";
import Product from "../components/product";

const FotoCar = () => {
  const data = serverResponse;

  return (
    <div>
      <div className="flex justify-between gap-4 flex-col">
        {data?.photos.map((foto) => (
          <Product key={foto.id} fotocars={foto} />
        ))}
      </div>
    </div>
  );
};
export default FotoCar;
