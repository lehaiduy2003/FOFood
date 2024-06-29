interface Props {
  name: string;
  onClick: () => void;
}

const Item = ({ name, onClick }: Props) => {
  return (
    <li onClick={onClick} className="menu-title">
      <a>{name}</a>
    </li>
  );
};
export default Item;
