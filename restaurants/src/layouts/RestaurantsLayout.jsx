import { Outlet, useSearchParams } from "react-router-dom";

const RestaurantsLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchChange = (event) => {
    const newSearchText = event.target.value;

    const params = new URLSearchParams();
    params.set("search", newSearchText);
    setSearchParams(params);
  };

  return (
    <main className="flex items-center min-h-screen w-full flex-col gap-4 bg-gray-500">
      <div className="flex flex-col items-center w-4/5 gap-4">
        <h1 className="flex-auto text-3xl p-2 font-semibold text-slate-900">
          Рестораны Твери
        </h1>
        <input
          type="text"
          value={searchParams.get("search")}
          placeholder="Найти..."
          onChange={searchChange}
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="flex w-4/5 justify-center items-center gap-4 ">
        <Outlet />
      </div>
      <footer className="flex w-full bg-slate-600 justify-center mt-auto">
        © Alexandr Grachev, {new Date().getFullYear()}
      </footer>
    </main>
  );
};

export default RestaurantsLayout;
