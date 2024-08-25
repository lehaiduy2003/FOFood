"use server";

import { signIn } from "next-auth/react";

export const SignIn = async () => {
  return await signIn("google");
};
