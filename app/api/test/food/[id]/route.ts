import { FOOD_NOT_FOUND } from "@/app/constants/foodError";
import prisma from "@/prisma/db";
import { NextRequest } from "next/server";

export async function GET(Request: NextRequest) {
  try {
    const food = await prisma.beverage.findUnique({
      where: {
        id: Request.nextUrl.pathname.split("/")[3],
      },
    });
    return Response.json(food, { status: 200, statusText: "OK" });
  } catch (error) {
    return Response.json(
      { errorCode: FOOD_NOT_FOUND.code, cause: FOOD_NOT_FOUND.message },
      { status: 404 }
    );
  }
}
