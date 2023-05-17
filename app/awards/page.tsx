"use client";

import { awards } from "@/awards";
import MoviesNav from "../components/moviesNav";
import { useState } from "react";

export default function AwardsPage() {
  const [hover, setHover] = useState(false);

  return (
    <div className="h-full min-h-[95vh] md:flex gap-4 p-4 lg:p-0 leading-7">
      <div className="w-1/4 hidden md:block border-r">
        <MoviesNav />
      </div>
      <div className="grid grid-cols-3 gap-3 w-full max-w-7xl p-6">
        {awards.map((award) => (
          <div className="p-3 h-96 text-4xl flex items-center hover:flex-col hover:justify-around hover:items-start max-w-s hover:w-full hover:bg-black hover:text-white hover:text-lg hover:font-black group">
            <div className="max-h-[70%]">
              <h2 className="">{award.title}</h2>
            </div>
            <ul className="hidden group-hover:block">
              {award.award.map((award) => (
                <li className="text-5xl">{award}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
