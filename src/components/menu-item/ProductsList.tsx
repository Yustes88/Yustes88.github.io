
export default function ProductsList({menu}: any) {
  if(menu === undefined) return null;
  return(
    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
    {menu.menu.map((product: any) => (
      <a key={product.id} href='!#' className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
          <img
            src={product.imgSrc}
            alt={product.title}
            className="h-2/4 object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
          <h3>{product.title}</h3>
          <p>{product.price}</p>
        </div>
        <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
      </a>
    ))}
  </div>
  )
}