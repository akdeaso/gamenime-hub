"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinkProps {
  children: ReactNode;
  href: string;
  prefetch?: boolean;
}

const NavLink = ({ children, href, prefetch }: NavLinkProps) => {
  const pathname = usePathname();
  if (href === pathname) {
    return <span className="text-blue-800">{children}</span>;
  }
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className="text-blue-800 hover:text-blue-300"
    >
      {children}
    </Link>
  );
};

export default NavLink;
