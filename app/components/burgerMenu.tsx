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
        <div onClick={() => setIsOpen(true)} className="absolute right-5 top-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            height="35"
            width="35"
          >
            <g>
              <line
                x1="13.5"
                y1="2"
                x2="0.5"
                y2="2"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></line>
              <line
                x1="13.5"
                y1="7"
                x2="0.5"
                y2="7"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></line>
              <line
                x1="13.5"
                y1="12"
                x2="0.5"
                y2="12"
                fill="none"
                stroke="#000000"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></line>
            </g>
          </svg>
        </div>
      )}
      {isOpen && (
        <div className="z-50 h-screen w-full">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14 14"
              height="35"
              width="35"
            >
              <g>
                <line
                  x1="13.5"
                  y1="0.5"
                  x2="0.5"
                  y2="13.5"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></line>
                <line
                  x1="0.5"
                  y1="0.5"
                  x2="13.5"
                  y2="13.5"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></line>
              </g>
            </svg>
          </div>

          <nav className="flex w-full flex-col items-center justify-center bg-white">
            <ul
              onClick={closeMenu}
              className="mt-16 grid grid-cols-1 justify-items-center gap-7 lg:mx-auto lg:max-w-xl"
            >
              <li className="">
                <Link href={"/"}>
                  <h4 className="p-4 text-center font-Playfair text-7xl font-bold uppercase lg:p-0 lg:text-7xl">
                    Reis
                    <br /> Çelik
                  </h4>
                </Link>
              </li>
              <li>
                <Link className="text-xl hover:opacity-50" href={"/movies"}>
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  className="text-xl hover:opacity-50"
                  href={"/photography"}
                >
                  Photography
                </Link>
              </li>
              <li>
                <Link className="text-xl hover:opacity-50" href={"/awards"}>
                  Awards
                </Link>
              </li>
              <li>
                <Link className="text-xl hover:opacity-50" href={"/biography"}>
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
