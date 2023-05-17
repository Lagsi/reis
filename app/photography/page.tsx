import MoviesNav from "../components/moviesNav";

export default function PhotographyPage() {
  return (
    <div className="h-full min-h-[95vh] md:flex gap-4 p-4 lg:p-0 leading-7">
      <div className="w-1/4 hidden md:block border-r">
        <MoviesNav />
      </div>
      <div className="flex justify-center items-center w-full">
        <h2 className="text-center text-7xl">
          Coming soon...
        </h2>
      </div>
    </div>
  )
}