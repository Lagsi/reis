"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  movies?: any;
}

export default function MoviesNav({ movies }: Props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position =
        window.pageYOffset /
        (document.documentElement.scrollHeight - window.innerHeight);
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="hidden w-[350px] border-r px-6 md:block lg:w-[400px]">
      <div className="sticky top-12 h-[calc(100vh-8rem)] w-full md:top-24">
        <nav
          className={`flex h-full flex-col ${
            movies ? "justify-between" : "justify-around"
          }`}
        >
          {movies && (
            <ul className="relative flex flex-col items-center gap-3 text-center lg:gap-5">
              {movies.map((movie: any, i: number) => (
                <li
                  key={i}
                  className={`relative w-fit transition-all  duration-500 ease-in-out before:opacity-50 after:opacity-50 hover:opacity-50  ${
                    scrollPosition * 100 >= (100 / movies.length) * i &&
                    scrollPosition * 100 <= (100 / movies.length) * (i + 1) &&
                    "opacity-50 before:absolute before:-left-4 before:top-1/2 before:h-[2px] before:w-2 before:-translate-y-1/2 before:bg-black after:absolute after:-right-4 after:top-1/2 after:h-[2px] after:w-2 after:-translate-y-1/2 after:bg-black"
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
          )}
          {/* <div className="absolute w-2 h-full right-0 2xl:right-20">
              <div
                className="bg-inherit w-full"
                style={{
                  height: `${scrollPosition * 83}%`,
                  maxHeight: `100%`,
                }}
              ></div>
              <div
                className={`w-full flex justify-center items-center`}
                style={{
                  height: `${100 / (movies.length + 1)}%`,
                  maxHeight: "120%",
                  marginTop: ``,
                }}
              >
                <div className="bg-black w-full h-2 rounded-full"></div>
              </div>
            </div> */}

          <Link href={"/"}>
            <h4 className="select-none text-center font-Playfair font-bold uppercase md:text-5xl lg:p-0 lg:text-7xl">
              Reis
              <br /> Çelik
            </h4>
          </Link>
          <ul className="grid grid-cols-1 gap-3 text-center lg:mx-auto lg:mb-20 lg:max-w-xl lg:grid-cols-2 lg:gap-3 lg:text-left">
            <li>
              <Link className="hover:opacity-50" href={"/movies"}>
                Movies
              </Link>
            </li>
            <li>
              <Link className="hover:opacity-50" href={"/photography"}>
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
    </div>
  );
}
