import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthContext from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClassFlow",
  description: "A seamless classroom management solution for principals, teachers, and students. Effortlessly organize classrooms, schedules, and assignments with intuitive tools designed to streamline education.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <Toaster />
          {children}
        </AuthContext>  
        </body>
    </html>
  );
}
