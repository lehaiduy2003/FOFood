import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const allFoods = await prisma.beverage.findMany();
    console.log(allFoods);
    return Response.json(allFoods, { status: 200, statusText: "OK" });
  } catch (error) {
    console.error(error);
    return Response.json({
      status: 500,
      statusText: "Internal Server Error",
    });
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST() {
  try {
    await prisma.menu.createMany({
      data: [{ id: "3" }, { id: "4" }, { id: "5" }],
    });
    await prisma.beverage.createMany({
      data: [
        {
          name: "cơm gà",
          price: 25000,
          image: "https://static.vinwonders.com/2023/02/com-ga-da-nang-1.jpg",
          description: "cơm gà đà nẵng đặc biệt thơm ngon",
          menuId: "3",
          status: true,
        },
        {
          name: "bún chả Hà Nội",
          price: 30000,
          image:
            "https://bizweb.dktcdn.net/100/442/328/products/bun-cha-ha-noi.jpg?v=1644892472637",
          description: "Bún chả gia truyền Hà Nội",
          menuId: "3",
          status: true,
        },
      ],
    });
    console.log("added");
    return Response.json(
      { message: "create succeed" },
      { status: 201, statusText: "Created" }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "create failed" },
      { status: 500, statusText: "Internal Server Error" }
    );
  } finally {
    await prisma.$disconnect();
  }
}
