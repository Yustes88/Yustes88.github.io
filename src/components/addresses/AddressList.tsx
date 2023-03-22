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
        <button className={`hover:scale-110 hover-1 transition-all duration-300 ${isSelected ? 'selected' : ''}`} onClick = {() => setAddressId(item)} key={item.id}>
    <div className="py-1 border-l border-black">
            <h3 className="pl-6 font-semibold text-gray-900 ">{item.title}</h3>
            <address className="pt-2 pl-6 not-italic text-gray-600">
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