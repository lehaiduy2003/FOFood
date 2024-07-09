import { useState } from "react";
import Modal from "../Modal";

interface Props {
  data: any;
}

const Item = ({ data }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleOpen = () => {
    setIsOpened(true);
  };
  const handleClose = () => {
    setIsOpened(false);
  };
  return (
    <div className="card bg-base-100 w-60 h-96 shadow-xl my-2 mx-3 cursor-pointer">
      <figure className="">
        {data.image && (
          <img src={data.image} title={data.name} alt={data.name} />
        )}
      </figure>
      <div className="card-body justify-between">
        <span className="card-title">{data.name}</span>
        <span>
          {data.rate && `${data.rate}/5`}
          {data.orderCount && ` | ${data.orderCount}`}
          {data.address && <p>{data.address}</p>}
        </span>
        {data.price && (
          <div className="flex flex-row justify-between items-center">
            <span className="badge badge-neutral">{data.price} VNĐ</span>
            <Modal
              data={data}
              onOpen={handleOpen}
              onClose={handleClose}
              isOpened={isOpened}
              text="Order"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Item;