interface Props {
  image?: string;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  decreaseQuantity: () => void;
  increaseQuantity: () => void;
}
const ModalCard = ({
  image,
  name,
  description,
  price,
  quantity,
  decreaseQuantity,
  increaseQuantity,
}: Props) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={
            image ||
            `https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg`
          }
          alt={name}
          className="max-h-28"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description && `${description}`}</p>
        <p>{price} VND</p>
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
          <button className="btn btn-sm btn-circle" onClick={increaseQuantity}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
