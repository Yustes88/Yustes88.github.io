import { team } from "../../data/data";

export default function AboutTeam() {
  return(
    <div className="relative before:bg-clip">
    <div className="mx-auto mt-20 max-w-7xl pt-6 pb-10 sm:mt-48 px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Наша команда</h2>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum. Nemo vel facere
        repellendus ut eos dolores similique.
      </p>
    </div>
    <ul
      className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-y-16 gap-x-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
    >
      {team.map((person) => (
        <li key={person.name}>
          <img className="mx-auto h-30 w-30 object-cover rounded-full" src={person.imageUrl} alt="" />
          <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
          <p className="text-sm leading-6 text-gray-600">{person.role}</p>
        </li>
      ))}
    </ul>
  </div>
  </div>
  )
}