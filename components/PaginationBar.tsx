import type { ReactNode } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export interface PaginationBarProps {
  href: string;
  page: number;
  pageCount: number;
}

interface PaginationLinkProps {
  children: ReactNode;
  enabled: boolean;
  href: string;
}

const PaginationBar = ({ href, page, pageCount }: PaginationBarProps) => {
  return (
    <div className="flex gap-2 items-center pb-3">
      <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
        <ChevronLeftIcon className="h-5 w-5" />
        <span className="sr-only">Previous Page</span>
      </PaginationLink>
      <span>
        Page {page} of {pageCount}
      </span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        enabled={page < pageCount}
      >
        <ChevronRightIcon className="h-5 w-5" />
        <span className="sr-only">Next Page</span>
      </PaginationLink>
    </div>
  );
};

const PaginationLink = ({ children, enabled, href }: PaginationLinkProps) => {
  if (!enabled) {
    return (
      <span className="border cursor-not-allowed rounded text-slate-300 text-sm">
        {children}
      </span>
    );
  }
  return (
    <Link
      href={href}
      className="border rounded text-slate-500 text-sm
                     hover:bg-orange-100 hover:text-slate-700"
    >
      {children}
    </Link>
  );
};

export default PaginationBar;
