import { ReactNode } from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import { exo2, martianMono } from "./fonts";

export const metadata = {
  title: {
    default: "Game and Anime Reviews",
    template: "%s | Game and Anime Reviews",
  },
  description: "A collection of game and anime reviews",
};

interface LayoutProps {
  children: ReactNode;
}

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const RootLayout = ({ children }: LayoutProps) => {
  const currentYear = getCurrentYear();
  return (
    <html lang="en" className={`${martianMono.variable} ${exo2.variable}`}>
      <body className="px-4 py-2 flex flex-col min-h-screen bg-blue-50 font-medium">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="text-center border-t py-3 text-xs text-slate-500">
          Gamenime Hub Copyright &copy;{currentYear}
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
