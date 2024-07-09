import { USER_ALREADY_EXIST } from "@/app/constants/userError";
import prisma from "@/prisma/db";
import { User } from "@prisma/client";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const items: User[] = [...(await request.json())];
  try {
    const createUser = await Promise.all(
      items.map((item) => {
        return prisma.user.create({
          data: {
            name: item.name,
            username: item.username,
            password: item.password,
            phone: item.phone,
            accountType: item.accountType,
            image: item.image,
            email: item.email,
            status: item.status,
          },
        });
      })
    );
    return Response.json(
      { createUser, message: `created success` },
      {
        status: 200,
      }
    );
  } catch (error) {
    //console.error(error);
    return Response.json(
      {
        error_code: USER_ALREADY_EXIST.code,
        cause: USER_ALREADY_EXIST.message,
      },
      {
        status: 406,
      }
    );
  }
}
