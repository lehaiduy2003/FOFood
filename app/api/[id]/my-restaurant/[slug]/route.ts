import { USER_ALREADY_EXIST, USER_NOT_FOUND } from "@/app/constants/userError";
import prisma from "@/prisma/db";
import { NextRequest } from "next/server";

export const route = (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  switch (params.slug) {
    case undefined || null:
      return GET(request);
    case "add-food":
      return POST(request);
    case "delete-food":
      return DELETE(request);
    case "update-food":
      return PUT(request);
  }
};
export async function GET(request: NextRequest) {
  const { userId } = await request.json();
  try {
    const allFoods = await prisma.beverage.findMany({
      where: {
        restaurant: {
          user: {
            id: userId, //"clxzkzq7c000010rj9ot7wikb"
          },
        },
      },
      orderBy: {
        orderCount: "desc",
      },
    });
    console.log(allFoods);
    return Response.json(allFoods, { status: 200, statusText: "OK" });
  } catch (error) {
    console.error(error);
    return Response.json({
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
export async function DELETE(request: NextRequest) {
  const { foodId } = await request.json();
  try {
    const deleteFood = await prisma.beverage.delete({
      where: {
        id: foodId,
      },
    });
    return Response.json(
      { deleteFood, message: `deleted ${foodId}` },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
        statusText: "OK",
      }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { error_code: USER_NOT_FOUND.code, cause: USER_NOT_FOUND.message },
      {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
        statusText: "Not Found",
      }
    );
  }
}
export async function POST(request: NextRequest) {
  const { id, name, price, image, description, restaurantId, status } =
    await request.json();
  try {
    const createFood = await prisma.beverage.create({
      data: {
        name: name,
        price: price,
        image: image,
        description: description,
        restaurantId: restaurantId,
        status: status,
      },
    });
    return Response.json(
      { createFood, message: `created ${id}` },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
        statusText: "OK",
      }
    );
  } catch (error) {
    //console.error(error);
    return Response.json(
      {
        error_code: USER_ALREADY_EXIST.code,
        cause: USER_ALREADY_EXIST.message,
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
        statusText: "OK",
      }
    );
  }
}

export async function PUT(request: NextRequest) {
  const { id, name, price, image, description, status } = await request.json();
  try {
    const updateFood = await prisma.beverage.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        price: price,
        updatedAt: new Date(),
        image: image,
        description: description,
        status: status,
      },
    });
    return Response.json(
      { updateFood, message: `updated ${id}` },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
        statusText: "OK",
      }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: `failed to update ${id}` },
      {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
        statusText: "Not Found",
      }
    );
  }
}
