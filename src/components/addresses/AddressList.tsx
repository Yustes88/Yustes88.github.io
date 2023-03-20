import { DeliveryDataTypes } from "../../types/types";

type AddressListProps = {
  data: DeliveryDataTypes[];
  setAddressId: any;
  addressById: DeliveryDataTypes;
};
function AddressList({data, setAddressId, addressById}: AddressListProps) {


  return(
    <>
    {data.map((item: DeliveryDataTypes) => {
      const isSelected = item.id === addressById.id;
      return(
        <button className={`hover:scale-110 transition-all duration-300 ${isSelected ? 'selected' : ''}`} onClick = {() => setAddressId(item)} key={item.id}>
    <div>
            <h3 className="border-l border-black pl-6 font-semibold text-gray-900 ">{item.title}</h3>
            <address className="border-l border-gray-200 pt-2 pl-6 not-italic text-gray-600">
              <p>{item.addressShort}</p>
            </address>
          </div>
          </button>
)
    })}
    </>
  )
}

export default AddressList;