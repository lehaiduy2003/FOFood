import prisma from "@/prisma/db";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orders = await prisma.order.findMany({
      where: {
        phone: params.id,
      },
    });

    if (orders.length === 0) {
      return Response.json({ message: "no orders" }, { status: 200 });
    }

    const invoices = await Promise.all(
      orders.map(async () => {
        return await prisma.order.findMany({
          select: {
            beverage: {
              select: {
                name: true,
                image: true,
              },
            },
            orderAt: true,
          },
          where: {
            phone: params.id,
          },
        });
      })
    );

    return Response.json({ data: invoices }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return Response.json({ message: "no data" }, { status: 406 });
  }
}
