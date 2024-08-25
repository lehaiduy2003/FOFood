"use client";
import { useSearchParams } from "next/navigation";

import { Beverage } from "@prisma/client";
import Loading from "../components/ui/Loading";
import Pagination from "../components/ui/Pagination";
import ProductCard from "../components/ui/ProductCard";
import { UseFetchData } from "../hooks/useFetchData";

const SearchingPage = () => {
  const searchParams = useSearchParams();

  const params = {
    query: searchParams?.get("query") || "",
    page: searchParams?.get("page") || "1",
    limit: searchParams?.get("limit") || "20",
    filter: searchParams?.get("filter") || "orderCount",
    sort: searchParams?.get("sort") || "desc",
  };

  const url = new URL(
    `http://${process.env.NEXT_PUBLIC_HOSTNAME}:${process.env.NEXT_PUBLIC_PORT}`
  );
  url.pathname = "api/search";
  url.search = new URLSearchParams(params).toString();

  //console.log(url);

  const { data, loading } = UseFetchData<Beverage>(url.toString(), "GET"); // API return an object with data(array of object) and metadata(object)
  const beverages = Object.values(data || {})[0]; // Get the data from the object
  const metaData = Object.values(data || {})[1]; // Get the metadata from the object

  console.log(metaData);

  return (
    <>
      <main className="flex flex-row">
        <aside className="w-1/4 relative">filter</aside>
        <section className="w-full h-fit">
          {loading ? (
            <div className="flex ml-96 justify-center items-center min-h-80">
              <Loading />
            </div>
          ) : (
            Array.isArray(beverages) && (
              <div className="flex flex-col">
                <div className="flex justify-start flex-wrap flex-row">
                  {beverages.map((beverage, index) => (
                    <ProductCard data={beverage} key={index} />
                  ))}
                </div>
                <Pagination metaData={metaData} />
              </div>
            )
          )}
        </section>
      </main>
    </>
  );
};

export default SearchingPage;
