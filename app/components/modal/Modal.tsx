import { useEffect, useState } from "react";
import useDialog from "../../hooks/useDialog";
import { modal } from "../../types/modal";
import ModalCard from "./ModalCard";
import ModalForm from "./ModalForm";
import { handleSubmit } from "./modalFormSubmit";

const Modal = ({
  data,
  isOpened,
  onOpen,
  onClose,
  updateOrderCount,
}: modal) => {
  //console.log(data.id);

  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [total, setTotal] = useState(data.price);

  const incQuantity = () => {
    setQuantity(quantity + 1);
    setTotal(data.price * quantity);
  };
  const decQuantity = () => {
    setQuantity(quantity - 1);
    setTotal(data.price * quantity);
  };
  // Collect form data
  const formData = {
    name, // Assuming you have a state for this
    quantity, // Include other form data as needed
    address,
    phone,
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) =>
    await handleSubmit(data.id, formData, e, onClose, updateOrderCount);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const changeAddress = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddress(e.target.value);

  const changePhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  const formFuncs = {
    submitForm,
    changeName,
    changePhone,
    changeAddress,
  };

  // Reset quantity and total when modal is reopened
  useEffect(() => {
    if (isOpened) {
      setQuantity(1); // Reset quantity to initial value
      setTotal(data.price); // Reset total to initial value (or calculate based on initial quantity)
    }
  }, [isOpened, data.price]); // Dependency array includes isOpen to trigger effect when it changes

  const dialogRef = useDialog(isOpened, onClose);

  //console.log(beverage);

  return (
    <>
      <button className="btn btn-sm w-16 btn-outline" onClick={onOpen}>
        {isOpened ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          "Order"
        )}
      </button>
      {isOpened && (
        <dialog ref={dialogRef} className="modal">
          <div className="modal-box h-fit">
            <ModalCard
              quantity={quantity}
              decreaseQuantity={decQuantity}
              increaseQuantity={incQuantity}
              price={data.price}
              description={data.description}
              name={data.name}
              image={data.image}
            ></ModalCard>
            <ModalForm
              id={data.id}
              onClose={onClose}
              total={total}
              formData={formData}
              formFuncs={formFuncs}
            ></ModalForm>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
