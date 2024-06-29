import prisma from "@/prisma/db";
import { NextRequest } from "next/server";

export const route = (
  request: NextRequest,
  { params }: { params: { slug: string } }
) => {
  switch (params.slug) {
    case undefined:
      return GET();
    case "add-food":
      return POST(request);
    case "delete-food":
      return DELETE(request);
    case "update-food":
      return PUT(request);
  }
};
export async function GET() {
  try {
    const allFoods = await prisma.beverage.findMany({
      include: {
        menu: {
          include: {
            restaurant: {
              include: {
                user: true,
              },
            },
          },
        },
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
      { message: `failed to delete ${foodId}` },
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
  const { id, name, price, image, description, menuId, status } =
    await request.json();
  try {
    const createFood = await prisma.beverage.create({
      data: {
        name: name,
        price: price,
        image: image,
        description: description,
        menuId: menuId,
        status: status,
      },
    });
    return Response.json(
      { createFood, message: `updated ${id}` },
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

export async function PUT(request: NextRequest) {
  const { id, name, price, image, description, menuId, status } =
    await request.json();
  try {
    const updateFood = await prisma.beverage.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        price: price,
        image: image,
        description: description,
        menu: menuId,
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
