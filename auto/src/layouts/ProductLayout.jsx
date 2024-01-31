import { Outlet } from "react-router-dom";

const ProductLayout = () => {
  // ...
  return (
    <main className="flex min-h-screen flex-col bg-yellow-200 gap-4">
      <div className="flex h-40 w-full justify-center items-center  bg-[#b89067] ">
        <a
          href="/details"
          className="flex justify-center font-serif font-bold text-xl"
        >
          <h2>Нажми на карточку автомобиля.</h2>
        </a>
      </div>
      <Outlet />
      <footer className="flex  bg-slate-600 justify-center mt-auto">
        © Alexandr Grachev, {new Date().getFullYear()}
      </footer>
    </main>
  );
};

export default ProductLayout;
