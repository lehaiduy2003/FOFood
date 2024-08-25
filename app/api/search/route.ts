import prisma from "@/prisma/db";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const query = searchParams.get("query");
  const page = Number(searchParams?.get("page")) || 1;
  const limit = Number(searchParams?.get("limit")) || 20;
  const filter = searchParams?.get("filter") || "orderCount";
  const sort = searchParams?.get("sort") || "desc";

  if (!query) {
    return NextResponse.json({ message: "no query" }, { status: 400 });
  }

  try {
    const totalItems = await prisma.beverage.count({
      where: {
        name: {
          contains: query,
        },
      },
    });

    const items = await prisma.beverage.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        name: {
          contains: query,
        },
      },
      orderBy: {
        [filter]: sort,
      },
    });

    const metaData = {
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      totalItems: totalItems,
      limit: limit,
      skip: (page - 1) * limit,
    };

    //console.log(metaData);

    return NextResponse.json(
      { data: items, metaData: metaData },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "no data" }, { status: 400 });
  }
}
