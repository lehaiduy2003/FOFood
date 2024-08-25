import prisma from "@/prisma/db";

import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orders = await prisma.order.findMany({
      select: {
        beverage: {
          select: {
            name: true,
            image: true,
            price: true,
          },
        },
        quantity: true,
        orderAt: true,
      },
      where: {
        phone: params.id,
      },
    });

    const invoices = orders.map((order) => ({
      ...order,
      total: order.beverage.price * order.quantity,
    }));

    return Response.json({ data: invoices }, { status: 200 });
  } catch (error: any) {
    console.log(error);
    return Response.json({ message: "no data" }, { status: 400 });
  }
}
