import { CardsCarousel } from "../carosel/Carosel";


export default function BakeryMenu() {
  


  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brown-noir sm:text-4xl">Наше меню</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Какой-то короткий красивый текст про вашу еду.
          </p>
        </div>
        <div className="mx-auto max-w-7xl pt-4 px-4 sm:px-6 lg:px-8">
          
        
            <CardsCarousel/>
            
        </div>
      </div>
    </div>
  )
}
