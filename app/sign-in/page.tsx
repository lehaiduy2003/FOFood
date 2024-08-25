"use client";
import MediaSignIn from "../components/onboarding/sign-in/MediaSignIn";
import { AreaCode } from "../types/areaCode";

const LoginPage = () => {
  const areaCodes: AreaCode[] = [
    { code: "+1", country: "Canada" },
    { code: "+7", country: "Russia" },
    { code: "+65", country: "Singapore" },
    { code: "+81", country: "Japan" },
    { code: "+82", country: "South Korea" },
    { code: "+84", country: "Vietnam" },
    { code: "+86", country: "China" },
  ];
  return (
    <>
      <main className="flex justify-center items-center flex-col min-h-screen bg-slate-100">
        <label className="text-3xl font-bold text-center mb-5">Sign in</label>
        <MediaSignIn />
      </main>
    </>
  );
};

export default LoginPage;
