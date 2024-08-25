import Image from "next/image";
import { useState } from "react";
import Modal from "../modal/Modal";

interface Props {
  data: any;
}

const ProductCard = ({ data }: Props) => {
  const [isOpened, setIsOpened] = useState(false);
  const [orderCount, setOrderCount] = useState(data.orderCount);
  const updateOrderCount = () => {
    setOrderCount((orderCount: number) => orderCount + 1);
  };
  const handleOpen = () => {
    setIsOpened(true);
  };
  const handleClose = () => {
    setIsOpened(false);
  };
  return (
    <div
      className="card bg-base-100 w-60 h-96 shadow-xl my-2 mx-3 cursor-pointer"
      style={{ width: "240px", height: "400px" }}
    >
      <figure className="relative">
        {data.rate && (
          <span className="flex flex-row badge z-20 absolute top-0 right-0 mt-1 mr-1 opacity-80">
            {data.rate}/5
            <Image
              src="/star.png"
              alt="star"
              width={15}
              height={15}
              className="ml-1"
            />
          </span>
        )}

        <img
          style={{ width: "240px", height: "180px" }}
          src={data.image || "emptyFoodImg.png"}
          title={data.name}
          alt={data.name}
        />
      </figure>
      <div className="card-body justify-between">
        <span className="card-title text-blue-900">{data.name}</span>
        <span className="italic">{orderCount && ` ${orderCount} orders`}</span>

        <div className="flex flex-row justify-between items-center">
          <span className="badge badge-outline">
            <div className="text-blue-900">{data.price} VNĐ</div>
          </span>
          <Modal
            data={data}
            onOpen={handleOpen}
            onClose={handleClose}
            updateOrderCount={updateOrderCount}
            isOpened={isOpened}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
