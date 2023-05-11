"use client";

import Link from "next/link";
import { useState } from "react";

interface Props {
  movies: any;
}

export default function MoviesNav({ movies }: Props) {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full h-[calc(100vh-8rem)] sticky top-28 mt-28">
      <nav className=" flex flex-col h-full justify-between">
        <ul className="flex flex-col gap-5 items-center">
          {movies.map((movie: any, i: number) => (
            <li
              key={i}
              className={`w-fit hover:opacity-50 ${
                active ? "line-through" : ""
              }`}
            >
              <a className="w-fit" href={`#${movie.title}`}>
                <h3 className="md:text-lg lg:text-xl xl:text-2xl">
                  {movie.title}
                </h3>
              </a>
            </li>
          ))}
        </ul>
        <Link href={"/"}>
          <h4 className="text-6xl font-Playfair uppercase p-4 font-bold text-center lg:text-7xl lg:p-0">
            Reis
            <br /> Çelik
          </h4>
        </Link>
        <ul className="grid grid-cols-2 text-left gap-3 mb-28 lg:max-w-xl lg:mx-auto">
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
            <Link className="hover:opacity-50" href={"/bio"}>
              Biography
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
