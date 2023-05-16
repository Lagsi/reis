"use client";

import Link from "next/link";
import { useState } from "react";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = (event: any) => {
    console.log(event);
    if (event.target.tagName === "A" || event.target.tagName === "H4") {
      setIsOpen(false);
    }
  };

  return (
    <>
      {!isOpen && (
        <div onClick={() => setIsOpen(true)} className="absolute top-0 right-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            height="48"
            width="48"
          >
            <g>
              <line
                x1="13.5"
                y1="2"
                x2="0.5"
                y2="2"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></line>
              <line
                x1="13.5"
                y1="7"
                x2="0.5"
                y2="7"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></line>
              <line
                x1="13.5"
                y1="12"
                x2="0.5"
                y2="12"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></line>
            </g>
          </svg>
        </div>
      )}
      {isOpen && (
        <div className="w-screen h-screen relative z-50">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0"
          >
            CLOSE
          </div>

          <nav className="bg-white w-full h-1/2 flex flex-col items-center justify-center">
            <ul
              onClick={closeMenu}
              className="grid grid-cols-1 justify-items-center gap-3 x lg:max-w-xl lg:mx-auto"
            >
              <li>
                <Link href={"/"}>
                  <h4 className="text-5xl font-Playfair uppercase p-4 font-bold text-center lg:text-7xl lg:p-0">
                    Reis
                    <br /> Çelik
                  </h4>
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-50" href={"/movies"}>
                  Movies
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-50" href={"/photos"}>
                  Photography
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-50" href={"/awards"}>
                  Awards
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-50" href={"/biography"}>
                  Biography
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
