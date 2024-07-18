import prisma from "@/prisma/db";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const apiKey = request.headers.get("apiKey");
    if (!apiKey || apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
      return Response.json({
        status: 401,
        statusText: "Unauthorized",
      });
    }
    const restaurants = await prisma.restaurant.findMany({
      take: 10,
      select: {
        id: true,
        name: true,
        address: true,
        rate: true,
        image: true,
        beverages: {
          select: {
            id: true,
            name: true,
            price: true,
            image: true,
            rate: true,
            orderCount: true,
          },
          where: {
            status: true,
          },
        },
      },
      where: {
        user: {
          status: true,
        },
      },
      orderBy: {
        rate: "desc",
      },
    });
    return Response.json(restaurants, { status: 200, statusText: "OK" });
  } catch (error) {
    console.error(error);
    return Response.json({
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
