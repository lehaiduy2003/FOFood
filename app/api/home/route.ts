import prisma from "@/prisma/db";

export async function GET() {
  try {
    const allFoods = await prisma.beverage.findMany({
      take: 20,
      orderBy: {
        price: "asc",
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
