import { useRouter } from "next/navigation";

interface Props {
  id: string;
  onClose: () => void;
  total: number;
  formData: {
    name: string;
    address: string;
    phone: string;
  };
  formFuncs: {
    submitForm: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    changeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeAddress: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changePhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}
const ModalForm = ({ onClose, total, formData, formFuncs }: Props) => {
  const router = useRouter();
  return (
    <div className="modal-action">
      <form
        method="post"
        onSubmit={formFuncs.submitForm}
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
          value={formData.name}
          placeholder="Your name"
          onChange={formFuncs.changeName}
        ></input>
        <input
          className="input input-bordered w-full mb-3"
          type="text"
          name="address"
          value={formData.address}
          placeholder="Your address"
          onChange={formFuncs.changeAddress}
        ></input>
        <input
          className="input input-bordered w-full mb-3"
          type="text"
          name="phone"
          value={formData.phone}
          placeholder="Your phone number"
          onChange={formFuncs.changePhone}
        ></input>
        <button className="mt-3 btn w-full btn-primary" type="submit">
          {total} VND - Order
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
