import { ReactNode } from "react";
import { martianMono } from "@/app/fonts";

export interface HeadingProps {
  children: ReactNode;
}
const Heading = ({ children }: HeadingProps) => {
  return <h1 className="font-bold pb-3 font-martian text-2xl">{children}</h1>;
};

export default Heading;
