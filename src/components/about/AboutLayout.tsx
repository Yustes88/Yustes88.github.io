import { AboutImages } from "../../data/data"

const values = [
  {
    name: 'Натуральные продукты',
    description:
      'Для приготовления блюд мы используем только натуральные продукты, как будто из деревенской глубинки. А наш старший технолог строго следит за тем, чтобы к вашему столу попали самые вкусные и румяные пирожки.',
  },
  {
    name: 'Национальные рецепты',
    description:
      'Команда «Мамы Волги» специально ездила на обучение в Казань, познать все тонкости традиционной рецептуры. Чтобы привезти кусочек татарского солнца в Северную столицу.Печёный Эчпочмак, сочная Самса, многослойный пирог Губадия и медовый Чак-чак и ещё много чем, нам есть чем тебя удивить!',
  },
  {
    name: 'Знакомый вкус',
    description:
      'Кроме традиционной еды, у нас есть пирожки с луком и яйцом, с капустой, с вишней и многие другие любимые с детства. А особую гордость вызывают пирожки с сомом, которые мы сами придумали!',
  },
  {
    name: 'Делаем с любовью',
    description:
      'Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.',
  },
  {
    name: 'Заботимся о качестве',
    description:
      'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
  },
]
const team = [
  {
    name: 'Галина',
    role: 'Управляющая "Мамы Волги"',
    imageUrl:
      '/people/galina.jpg',
  },
  // More people...
]
// const blogPosts = [
//   {
//     id: 1,
//     title: 'Vel expedita assumenda placeat aut nisi optio voluptates quas',
//     href: '#',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     author: {
//       name: 'Michael Foster',
//       imageUrl:
//         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   // More posts...
// ]


export default function AboutLayout() {

  return (
    <div>

      <main className="isolate">
        <div className="relative isolate -z-10">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-5">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Сеть пекарень татарской кухни <br/> &quot;Мама Волга&quot;
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Здесь какой-нибудь прикольный текст про вас. Может быть ваши традиции, или ценности, или какая-нибудь краткая история появления вашей пекарни. Ну вы поняли.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src={AboutImages[0].imgUrl}
                        alt={AboutImages[0].alt}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src={AboutImages[1].imgUrl}
                        alt={AboutImages[1].alt}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={AboutImages[2].imgUrl}
                        alt={AboutImages[2].alt}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src={AboutImages[3].imgUrl}
                        alt={AboutImages[3].alt}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src={AboutImages[5].imgUrl}
                        alt={AboutImages[5].alt}
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 ">
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

        {/* Team section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
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
                <img className="mx-auto h-24 w-24 object-cover rounded-full" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Blog section
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Vel dolorem qui facilis soluta sint aspernatur totam cumque.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.datetime} className="mr-8">
                    {post.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                      {post.author.name}
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div> */}
      </main>
    </div>
  )
}
