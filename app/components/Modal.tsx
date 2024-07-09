import useDialog from "../hooks/useDialog";
import { UseFetchData } from "../hooks/useFetchData";
import { modal } from "../types/modal";

const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 3000;
const foodData: any = (id: string) => {
  return UseFetchData(`http://${hostname}:${port}/api/${id}`);
};

const Modal = ({ text, data, isOpened, onOpen, onClose }: modal) => {
  const dialogRef = useDialog(isOpened, onClose);

  const beverage = foodData(data.id);

  console.log(beverage);

  return (
    <>
      <button className="btn btn-sm w-16 btn-primary" onClick={onOpen}>
        {isOpened ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          text
        )}
      </button>
      {isOpened && (
        <dialog ref={dialogRef} className="modal">
          <div className="modal-box w-full h-fit">
            <h3 className="font-bold text-lg">{beverage.food.name}</h3>
            <p className="py-4 italic">
              restaurant:{" "}
              {beverage.food.restaurant.name &&
                `${beverage.food.restaurant.name}`}
            </p>
            <p className="mb-2">
              descripton:{" "}
              {beverage.food.descripton !== null
                ? `${beverage.food.description}`
                : "Không có mô tả món ăn"}
            </p>
            <p className="mb-2">
              address:{" "}
              {beverage.food.restaurant.address &&
                `${beverage.food.restaurant.address}`}
            </p>
            <div className="modal-action">
              <form
                action={`/order/${beverage.food.id}`}
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
                <select
                  className="select select-bordered w-full"
                  defaultValue={"default"}
                >
                  <option value={"default"} disabled>
                    Choose a payment method
                  </option>
                  <option>Cash</option>
                  <option>Online banking</option>
                </select>
                <button className="mt-3 btn w-full btn-primary" type="submit">
                  Order
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
