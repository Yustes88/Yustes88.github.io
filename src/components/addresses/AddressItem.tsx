import { DeliveryDataTypes } from "../../types/types";

type AddressListProps = {
  data: DeliveryDataTypes[];
};


function AddressList({data}: AddressListProps) {
  return(
    <>
    {data.map((item: DeliveryDataTypes) => {
      return(
        <div className="hover:scale-110 transition-all duration-300 hover-1">
    <div>
            <h3 className="border-l border-black pl-6 font-semibold text-gray-900 ">{item.title}</h3>
            <address className="border-l border-gray-200 pt-2 pl-6 not-italic text-gray-600">
              <p>{item.address}</p>
            </address>
          </div>
          </div>
)
    })}
    </>
  )
}

export default AddressList;