import type { HomepageItem } from "@/app/types/homeItem";
import Item from "./Item";

interface Props {
  items: HomepageItem[];
  title: string;
}
const ItemsShowCase = ({ items, title }: Props) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10 mb-5">{title}</h1>
      <section className="flex flex-row flex-wrap justify-center">
        {items
          ? items.map((item, index) => (
              <div key={item.id}>
                <Item key={index} data={item} />
              </div>
            ))
          : null}
      </section>
    </>
  );
};

export default ItemsShowCase;
