import { FOOD_ALREADY_EXISTS } from "@/app/constants/foodError";
import prisma from "@/prisma/db";
import { Beverage } from "@prisma/client";
import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
  const items: Beverage[] = [...(await request.json())];
  try {
    const createFoods = await Promise.all(
      items.map((item) => {
        return prisma.beverage.create({
          data: {
            name: item.name,
            price: item.price,
            image: item.image,
            rate: item.rate,
            orderCount: item.orderCount,
            description: item.description,
            restaurantId: item.restaurantId,
            status: item.status,
          },
        });
      })
    );
    return Response.json(
      { createFoods, message: `created success` },
      {
        status: 200,
      }
    );
  } catch (error) {
    //console.error(error);
    return Response.json(
      {
        error_code: FOOD_ALREADY_EXISTS.code,
        cause: FOOD_ALREADY_EXISTS.message,
      },
      {
        status: 406,
      }
    );
  }
}
