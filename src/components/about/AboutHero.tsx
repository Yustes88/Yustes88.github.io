import { AboutImages } from "../../data/data";

export default function AboutHero() {
  return(
    <div className="relative before:bg-clip">
    <div className="relative isolate -z-10">
    <div className="overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-5">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Сеть пекарень татарской кухни <br/> &quot;Мама Волга&quot;
            </h1>
            <p className="relative mt-10 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
              Здесь какой-нибудь прикольный текст про вас. Может быть ваши традиции, или ценности, или какая-нибудь краткая история появления вашей пекарни. Ну вы поняли.
            </p>
          </div>
          <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0 z-100">
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
              <div className="relative ">
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
  </div>
  )
}