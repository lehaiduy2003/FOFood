import prisma from "@/prisma/db";

export async function GET() {
  try {
    const restaurants = await prisma.restaurant.findMany({
      take: 20,
      select: {
        id: true,
        name: true,
        address: true,
        rate: true,
        image: true,
        user: {
          select: {
            name: true,
          },
        },
      },
      orderBy: {
        rate: "desc",
      },
    });
    //console.log(restaurants);
    return Response.json(restaurants, { status: 200, statusText: "OK" });
  } catch (error) {
    console.error(error);
    return Response.json({
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}