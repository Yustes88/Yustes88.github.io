import { values } from "../../data/data";

export default function AboutValues() {
  return(
    <div className="relative before:bg-clip">
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0 ">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Традиции во всём</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
Любимые, «Мама Волга» готовит с уважением к традициям только из натуральных продуктов и по национальным рецептам с исключительной любовью к своим гостям ❤ 
      </p>
    </div>
    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {values.map((value) => (
        <div key={value.name}>
          <dt className="font-semibold text-gray-900">{value.name}</dt>
          <dd className="mt-1 text-gray-600">{value.description}</dd>
        </div>
      ))}
    </dl>
  </div>
  </div>
  )
}