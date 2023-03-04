import { DeliveryDataTypes } from "../../types/types";

type AddressInfoProps = {
  address: DeliveryDataTypes,
}


function AddressInfo({address}: AddressInfoProps) {
  return(
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      <h3 className="text-base font-semibold leading-6 text-gray-900">{address.title}</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">{address.description}</p>
    </div>
    <div className="px-4 py-5 sm:p-0">
      <dl className="sm:divide-y sm:divide-brown-light-1">
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Адрес</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{address.address}</dd>
        </div>
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Рабочие дни</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{address.workingDays}</dd>
        </div>
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Часы работы</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{address.workingHours}</dd>
        </div>
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Номер телефона</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <a href={`tel:+${address.phoneNumber}`}>+788899900032</a>
          </dd>
        </div>
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">About</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            Может еще какая-либо важная информация
          </dd>
        </div>
      </dl>
    </div>
  </div>
  )
}

export default AddressInfo;