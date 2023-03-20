import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

export default function Error() {
  return (
    <>
      <div className="min-h-full bg-white">
        {/* <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
            <Logo/>
        </header> */}
        <main className="mx-auto w-full flex justify-center align-center max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="max-w-lg">
            <p className="text-base font-semibold leading-8 text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Страница не найдена</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Приносим свои извинения, возникла ошибка, мы уже работаем над ней. Обновите страницу или зайдите позже!
            </p>
            <div className="mt-10">
              <Link to={AppRoute.Root} className="text-sm font-semibold leading-7 text-indigo-600">
                <span aria-hidden="true">&larr;</span> Главная
              </Link>
            </div>
          </div>
        </main>
        {/* <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
          <img
            src="/bg.jpg"
            alt="Фото пирога"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div> */}
      </div>
    </>
  )
}
