import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex flex-row justify-center align-middle bg-neutral-100 py-2">
      <ul className="flex flex-row gap-2 w-full justify-center">
        <li className="">
          <Link
            href="/"
            className="hover:bg-blue-200 px-8 py-1 rounded-full duration-300 font-semibold text-center"
          >
            Home
          </Link>
        </li>
        <li className="">
          <Link
            href="/doc"
            className="hover:bg-blue-200 px-6 py-1 rounded-full duration-300 font-semibold text-center"
          >
            Doc
          </Link>
        </li>
        <li className="">
          <Link
            href="/fixtools"
            className="hover:bg-blue-200 px-6 py-1 rounded-full duration-300 font-semibold text-center"
          >
            Fix Tools
          </Link>
        </li>
      </ul>
    </nav>
  );
}
