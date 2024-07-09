import { RESTAURANT_ALDREADY_EXISTS } from "@/app/constants/restaurantError";
import prisma from "@/prisma/db";
import { Restaurant } from "@prisma/client";
import { NextRequest } from "next/server";
export async function POST(request: NextRequest) {
  const items: Restaurant[] = [...(await request.json())];
  try {
    const createFoods = await Promise.all(
      items.map((item) => {
        return prisma.restaurant.create({
          data: {
            name: item.name,
            address: item.address,
            description: item.description,
            rate: item.rate,
            image: item.image,
            userId: item.userId,
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
    console.error(error);
    return Response.json(
      {
        error_code: RESTAURANT_ALDREADY_EXISTS.code,
        cause: RESTAURANT_ALDREADY_EXISTS.message,
      },
      {
        status: 406,
      }
    );
  }
}
