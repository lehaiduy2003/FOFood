import prisma from "@/prisma/db";

export async function GET() {
  try {
    const foods = await prisma.beverage.findMany({
      take: 20,
      orderBy: [
        {
          orderCount: "desc",
        },
        {
          rate: "desc",
        },
        {
          price: "asc",
        },
      ],
    });
    //console.log(foods);
    return Response.json(foods, { status: 200, statusText: "OK" });
  } catch (error) {
    console.error(error);
    return Response.json({
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
