import { FOOD_NOT_FOUND } from "@/app/constants/foodError";
import prisma from "@/prisma/db";
import { Beverage, Order } from "@prisma/client";
import { Base64 } from "js-base64";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  console.log(request.nextUrl.pathname);

  const beverageId = request.nextUrl.pathname.split("/")[3];
  console.log(beverageId);

  try {
    const apiKey = request.headers.get("apiKey");
    console.log(apiKey);

    if (
      !apiKey ||
      Base64.decode(apiKey) !== "Basic " + process.env.NEXT_PUBLIC_API_KEY
    ) {
      return Response.json({ message: "unauthorized" }, { status: 401 });
    }
    const req = await request.json();
    console.log(req);

    const beverage: Beverage | null = await prisma.beverage.findUnique({
      where: {
        id: beverageId,
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
        name: req.name,
        address: req.address,
        phone: req.phone,
        quantity: req.quantity,
        beverageId: beverageId,
      },
    });
    await prisma.beverage.update({
      where: {
        id: beverageId,
      },
      data: {
        orderCount: beverage.orderCount + req.quantity,
      },
    });

    const invoice = {
      id: [order.phone, order.beverageId],
      beverage: beverage.name,
      beverageImage: beverage.image,
      date: order.orderAt,
      total: beverage.price * order.quantity,
      orderStatus: order.status,
    };
    return Response.json({ data: invoice }, { status: 200, statusText: "OK" });
  } catch (error: any) {
    console.log(error);

    return Response.json({ message: "no data" }, { status: 406 });
  }
}
