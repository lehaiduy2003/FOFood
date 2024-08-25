import { Beverage } from "@prisma/client";
import ProductCard from "./ui/ProductCard";

interface Props {
  items: Beverage[];
  title: string;
}
const HomepageShowcase = ({ items, title }: Props) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-start mt-10 mb-5 ml-16">
        {title}
      </h1>
      <section className="flex flex-row flex-wrap justify-start ml-16">
        {items
          ? items.map((item, index) => (
              <div key={index}>
                <ProductCard key={item.id} data={item} />
              </div>
            ))
          : null}
      </section>
    </>
  );
};

export default HomepageShowcase;
