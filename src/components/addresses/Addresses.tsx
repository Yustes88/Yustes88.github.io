import { useState } from "react";
import { DeliveryData } from "../../data/data";
import SimpleMap from "../map/Map";
import AddressInfo from "./AddressInfo";
import AddressList from "./AddressList";

export default function Addresses() {
  const [addressById, setAddressById] = useState(DeliveryData[0])

  return (
    <div className="bg-white pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl m-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Наши адреса</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui
            laoreet diam sed lacus, fames.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
         <AddressList data={DeliveryData} addressById = {addressById} setAddressId = {setAddressById}/>
        </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div>
          
          <AddressInfo address = {addressById}/>
          
        </div>

        <SimpleMap lat={addressById.location.lat} lng={addressById.location.lon}/>

        <div>

        </div>
        </div>

      </div>
      

    </div>
  )
}
