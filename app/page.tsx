"use client";

import { Restaurant } from "@prisma/client";
import Carousel from "./components/Carousel";
import HomepageShowCase from "./components/HomepageShowCase";
import Loading from "./components/ui/Loading";
import { UseFetchData } from "./hooks/useFetchData";

export default function Home() {
  const { data: restaurants, loading } = UseFetchData<Restaurant>(
    "api/home",
    "GET"
  );

  return (
    <>
      <Carousel />
      <main className="flex flex-col min-h-[50vh] justify-center">
        {loading ? (
          <Loading />
        ) : (
          Array.isArray(restaurants) &&
          restaurants.map((restaurant, index) => (
            <HomepageShowCase
              key={index}
              items={restaurant.beverages || []}
              title={restaurant.name}
            />
          ))
        )}
      </main>
    </>
  );
}
