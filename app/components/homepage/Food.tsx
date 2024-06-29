import type { FoodItem } from "../../types/foodItem";

interface Props {
  item: FoodItem;
}

const FoodItem = ({ item }: Props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl my-2 mx-3">
      <figure>
        {item.image && (
          <img src={item.image} alt={item.name} width={500} height={300} />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        {item.description && <p>{item.description}</p>}
        <div className="flex justify-start flex-row">
          <p>
            {item.rate && `Rate: ${item.rate}/5 | `}
            {item.orderCount && `Order: ${item.orderCount}`}
          </p>
        </div>
        <div className="card-actions justify-between items-center">
          <p>{item.price}VNĐ</p>
          <button className="btn btn-primary">Order</button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
