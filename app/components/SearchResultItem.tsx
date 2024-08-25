import Image from "next/image";

interface Props {
  name: string;
  price: number;
  image?: string;
  orderCount?: number;
  rate?: number;
}
const SearchResultItem = (data: Props) => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={data.image ? data.image : "/emptyFoodImg.png"}
                alt={data.name}
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{data.name}</div>
            {data.rate && (
              <span className="flex flex-row absolute top-0 right-0 mt-1 mr-1">
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
          </div>
        </div>
      </td>
      <td>{data.orderCount && data.orderCount}</td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default SearchResultItem;
