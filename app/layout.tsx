import { GoogleOAuthProvider } from "@react-oauth/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FOFood",
  description: "Fast Order Food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleOAuthProvider clientId={process.env.AUTH_GOOGLE_ID}>
        <body className={`${inter.className}`}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </GoogleOAuthProvider>
    </html>
  );
}
