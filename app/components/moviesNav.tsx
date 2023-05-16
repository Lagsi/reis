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
    <div className="w-full px-2 lg:h-[calc(100vh-8rem)] sticky top-12 md:top-24">
      <nav className=" flex flex-col h-full gap-5 justify-between">
        <ul className="flex flex-col text-center gap-1 lg:gap-5 items-center relative">
          {movies &&
            movies.map((movie: any, i: number) => (
              <li
                key={i}
                className={`w-fit relative hover:opacity-50  transition-all before:opacity-50 after:opacity-50 ease-in-out duration-500  ${
                  scrollPosition * 100 >= (100 / movies.length) * i &&
                  scrollPosition * 100 <= (100 / movies.length) * (i + 1) &&
                  "opacity-50 before:w-2 before:h-[2px] before:bg-black before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 after:w-2 after:h-[2px] after:bg-black after:absolute after:-right-4 after:top-1/2 after:-translate-y-1/2"
                }`}
              >
                <a className="w-fit" href={`#${movie.title}`}>
                  <h3 className="md:text-lg lg:text-xl xl:text-2xl">
                    {movie.title}
                  </h3>
                </a>
              </li>
            ))}
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
        </ul>
        <Link href={"/"}>
          <h4 className=" md:text-5xl font-Playfair uppercase p-4 font-bold text-center lg:text-7xl lg:p-0">
            Reis
            <br /> Çelik
          </h4>
        </Link>
        <ul className="grid grid-cols-1 text-center lg:grid-cols-2 lg:text-left gap-1 lg:gap-3 mb-28 lg:max-w-xl lg:mx-auto">
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
  );
}
