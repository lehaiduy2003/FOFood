// get food information by food id

import prisma from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const food = await prisma.beverage.findUnique({
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        image: true,
        orderCount: true,
        rate: true,
        restaurant: {
          select: {
            name: true,
            address: true,
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      where: {
        id: params.id,
      },
    });
    return NextResponse.json({ food }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Food not found" }, { status: 404 });
  }
}
