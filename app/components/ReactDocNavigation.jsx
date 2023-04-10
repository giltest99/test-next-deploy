import React from "react";

export default function ReactDocNavigation() {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li>
          <a
            href="#"
            className="hover:bg-blue-100 px-3 py-1 duration-200 hover:underline"
          >
            React
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:bg-blue-100 px-3 py-1 duration-200 hover:underline"
          >
            Next 13 beta
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:bg-blue-100 px-3 py-1 duration-200 hover:underline"
          >
            Tailwind
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:bg-blue-100 px-3 py-1 duration-200 hover:underline"
          >
            Next 13
          </a>
        </li>
      </ul>
    </nav>
  );
}
