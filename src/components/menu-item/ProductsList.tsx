import { BakeryMenuItemTypes } from "../../types/types";

export default function ProductsList({menu}: any) {
  if(menu === undefined) return null;
  return(
    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
            {menu.menu.map((item: BakeryMenuItemTypes) => (
              <div key={item.id} className="group card">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="h-full w-full object-cover object-center img-content"
                  />
                </div>
                <div className="hidden">
                  {item.ingredient.join(', ')}
                </div>
                <div className="flex justify-between items-center">
                <h3 className="mt-2 text-base font-semibold text-gray-900 ">
                    {item.title}
                </h3>
                <p>{item.price}</p>
                </div>
                <p className="my-4 text-gray-500">{item.description}</p>

              </div>
            ))}
          </div>
  )
}