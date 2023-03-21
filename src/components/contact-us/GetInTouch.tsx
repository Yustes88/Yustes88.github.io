import { useRef, useState } from "react"
import ScrollButton from "../buttons/ScrollButton"
import { ContactUs } from "./ContactUs"

export default function GetInTouch() {
  const [showComponent, setShowComponent] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null);


  const handleClick = () => {
    setShowComponent(!showComponent)
    if (scrollRef.current !== null) {
      setTimeout(() => scrollRef.current?.scrollIntoView({ block: "center", behavior:  'smooth' }));
    }
  }


  return (
    <>
    <div className="relative before:bg-clip">
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Свяжитесь с нами</h2>
              <p className="mt-4 leading-7 text-gray-600">
                Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Напишите нам на почту</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold text-indigo-600" href="mailto:collaborate@example.com">
                        mamaVolga@example.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Свяжитесь с нами по телефону</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div className="mt-1">
                    <dt className="sr-only">Phone number</dt>
                    <dd>
                    <a href="tel:+1555905-3456">+1 (555) 905-3456</a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Посетите нашу группу ВК</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">VK</dt>
                    <dd>
                      <a className="font-semibold text-brown" target='_blank' rel="noreferrer" href="https://vk.com/club59468601">
                        VK (https://vk.com/club59468601)
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="rounded-2xl bg-gray-50 text-center">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Или напишите нам и мы сами с Вами свяжемся</h3>
                <div className="pt-6">
                  {showComponent ? <button className="animate-bounce" onClick={() => setShowComponent(false)}>Скрыть</button> : <ScrollButton onClick={handleClick}/>}
                </div>
              </div>
    </div>

    <div className={showComponent ? 'block' : 'hidden'} ref={scrollRef} >
      <ContactUs/>
    </div>
    </>
  )
}
