import { useEffect, useState } from "react";
import useDialog from "../hooks/useDialog";
import { modal } from "../types/modal";

const Modal = ({ data, isOpened, onOpen, onClose }: modal) => {
  //console.log(data.id);

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(data.price);

  function increaseQuantity() {
    setQuantity(quantity + 1);
    setTotal(data.price * quantity);
  }

  function decreaseQuantity() {
    setQuantity(quantity - 1);
    setTotal(data.price * quantity);
  }

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
      <button className="btn btn-sm w-16 btn-primary" onClick={onOpen}>
        {isOpened ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          "Order"
        )}
      </button>
      {isOpened && (
        <dialog ref={dialogRef} className="modal">
          <div className="modal-box h-fit">
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src={
                    data.image ||
                    `https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg`
                  }
                  alt={data.name}
                  className="max-h-28"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>{data.description && `${data.description}`}</p>
                <p>{data.price} VND</p>
                <div className="card-actions justify-end items-center">
                  <button
                    className={
                      quantity <= 1
                        ? "btn btn-sm btn-circle disabled cursor-not-allowed btn-disabled"
                        : "btn btn-sm btn-circle"
                    }
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    className="btn btn-sm btn-circle"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-action">
              <form
                action={`/api/order/${data.id}`}
                className="flex flex-col justify-center items-center w-full h-full"
              >
                {/* if there is a button in form, it will close the modal */}
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                  onClick={onClose}
                >
                  ✕
                </button>
                <input
                  className="input input-bordered w-full mb-3"
                  type="text"
                  name="name"
                  placeholder="Your name"
                ></input>
                <input
                  className="input input-bordered w-full mb-3"
                  type="text"
                  name="address"
                  placeholder="Your address"
                ></input>
                <input
                  className="input input-bordered w-full mb-3"
                  type="text"
                  name="phone"
                  placeholder="Your phone number"
                ></input>
                <button className="mt-3 btn w-full btn-primary" type="submit">
                  {total} VND - Order
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
