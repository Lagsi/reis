"use client";

import { useState } from "react";

interface Props {
  movies: any;
}

export default function MoviesNav({ movies }: Props) {
  const [active, setActive] = useState(false);
  return (
    <div className="w-full h-[calc(100vh-8rem)] sticky top-28 text-center mt-28">
      <nav>
        <ul className="flex flex-col gap-5 items-center">
          {movies.map((movie: any, i: number) => (
            <li
              key={i}
              className={`w-fit hover:opacity-50 ${
                active ? "line-through" : ""
              }`}
            >
              <a className="w-fit" href={`#${movie.title}`}>
                <h3 className="text-2xl">{movie.title}</h3>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
