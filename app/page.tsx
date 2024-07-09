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
}
function useFetchData<T>(url: string): T[] | null {
  return UseFetchData(url);
}

export default function Home() {
  const foods = useFetchData<FoodProps>("/api/home/beverages");
  const restaurants = useFetchData<RestaurantProps>("/api/home/restaurants");

  return (
    <>
      <NavBar />
      <Carousel />
      <main className="flex flex-col">
        <ItemsShowCase items={foods || []} title="Best Sellers" />
        <ItemsShowCase items={restaurants || []} title="Best Restaurants" />
      </main>
      <Footer />
    </>
  );
}
