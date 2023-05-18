import { awards } from "@/awards";
import MoviesNav from "../components/moviesNav";

export default function AwardsPage() {
  return (
    <div className="h-full min-h-[95vh] md:flex gap-4 leading-7">
      <MoviesNav />
      <div className="w-full">
        <h1 className="text-6xl xl:text-8xl p-3 xl:p-6">Awards</h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 w-full max-w-7xl xl:p-6">
          {awards.map((award) => (
            <div
              key={award.title}
              className="p-3 h-72 border-b xl:border-none xl:h-96 justify-between text-4xl flex flex-col xl:hover:justify-around xl:hover:items-start max-w-lg xl:hover:w-full xl:hover:bg-black xl:hover:text-white xl:hover:text-lg xl:hover:font-black group last:mb-4"
            >
              <div className="max-h-[70%]">
                <h2 className="">{award.title}</h2>
              </div>
              <ul className="xl:hidden group-hover:block">
                {award.award.map((award, i) => (
                  <li key={i} className="text-lg xl:text-5xl">
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
