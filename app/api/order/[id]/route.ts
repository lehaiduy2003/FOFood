import { FOOD_NOT_FOUND } from "@/app/constants/foodError";
import prisma from "@/prisma/db";
import { Beverage, Order, OrderDetails } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const req = await request.json();
    console.log(req);

    const beverage: Beverage | null = await prisma.beverage.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!beverage) {
      return Response.json(
        {
          message: "food not found",
          errorCode: FOOD_NOT_FOUND.code,
          cause: FOOD_NOT_FOUND.message,
        },
        { status: 404 }
      );
    }
    const order: Order = await prisma.order.create({
      data: {
        userId: req.userId,
        paymentMethod: req.paymentMethod,
        total: beverage?.price * req.quantity || null,
      },
    });
    const orderDetail: OrderDetails = await prisma.orderDetails.create({
      data: {
        orderId: order.id,
        quantity: req.quantity,
        beverageId: params.id,
      },
    });

    const invoice = {
      orderId: order.id,
      beverage: beverage.name,
      beverageImage: beverage.image,
      date: orderDetail.orderAt,
      total: order.total,
      orderStatus: order.status,
    };

    return Response.json({ data: invoice }, { status: 200, statusText: "OK" });
  } catch (error: any) {
    console.log(error);

    return Response.json({ message: "no data" }, { status: 406 });
  }
}
