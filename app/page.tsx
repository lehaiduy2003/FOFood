"use client";

import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ItemsShowCase from "./components/homepage/ItemsShowCase";
import NavBar from "./components/NavBar";
import { UseFetchData } from "./hooks/useFetchData";
import { HomepageItem } from "./types/homeItem";

interface FoodProps extends HomepageItem {
  price: number;
  description?: string;
  orderCount?: number;
}
interface RestaurantProps extends HomepageItem {
  user: { name: string };
  address: string;
  beverages: FoodProps[];
}
function useFetchData<T>(url: string): T[] | null {
  return UseFetchData(url);
}

export default function Home() {
  const restaurants = useFetchData<RestaurantProps>("/api/home");

  return (
    <>
      <NavBar />
      <Carousel />
      <main className="flex flex-col">
        {restaurants
          ? restaurants.map((restaurant, index) => (
              <ItemsShowCase
                key={index}
                items={restaurant.beverages || []}
                title={restaurant.name}
              />
            ))
          : null}
      </main>
      <Footer />
    </>
  );
}
