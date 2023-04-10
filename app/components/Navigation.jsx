import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="flex flex-row justify-center align-middle bg-neutral-100 py-2">
      <ul className="flex flex-row gap-4">
        <Link
          href="/"
          className="hover:bg-blue-200 px-6 py-1 rounded duration-300 font-semibold"
        >
          Home
        </Link>
        <Link
          href="/doc"
          className="hover:bg-blue-200 px-6 py-1 rounded duration-300 font-semibold"
        >
          Doc
        </Link>
        <Link
          href="/fixtools"
          className="hover:bg-blue-200 px-6 py-1 rounded duration-300 font-semibold"
        >
          Fixtools
        </Link>
      </ul>
    </nav>
  );
}
