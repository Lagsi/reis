import { awards } from "@/awards";
import MoviesNav from "../components/moviesNav";

export default function AwardsPage() {
  return (
    <div className="h-full min-h-[95vh] gap-4 leading-7 md:flex">
      <MoviesNav />
      <div className="w-full">
        <h1 className="py-10 text-6xl md:p-4 xl:p-9 xl:text-8xl">Awards</h1>
        <div className="grid w-full max-w-7xl grid-cols-1 gap-3 xl:grid-cols-3 xl:p-6">
          {awards.map((award) => (
            <div
              key={award.title}
              className="group flex h-72 max-w-lg flex-col justify-between border-b text-4xl last:mb-4 md:p-3 xl:h-96 xl:border-none xl:hover:w-full xl:hover:items-start xl:hover:justify-around xl:hover:bg-black xl:hover:text-lg xl:hover:font-black xl:hover:text-white"
            >
              <div className="max-h-[70%]">
                <h2 className="">{award.title}</h2>
              </div>
              <ul className="group-hover:block xl:hidden">
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
