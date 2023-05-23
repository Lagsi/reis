import { movies } from "@/movies";
import MoviesNav from "../components/moviesNav";

export default function MoviesPage() {
  return (
    <div className="h-full gap-4 leading-7 md:flex">
      <MoviesNav movies={movies} />

      <div className="flex w-full flex-col items-center gap-4 py-10 md:p-4 lg:items-start xl:p-9">
        <h1 className="w-full snap-start pt-4 text-6xl xl:pt-9 xl:text-8xl">
          Movies
        </h1>
        {movies.map((movie, i) => (
          <>
            <section
              id={movie.title}
              key={i}
              className={`lg:h-screen ${
                i !== 0 && "snap-start"
              } flex max-h-[1440px] max-w-7xl flex-col items-center justify-between gap-10 first:pt-8 md:first:pt-3 lg:flex-row lg:items-start lg:py-6 lg:first:pt-6`}
            >
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl">{movie.title}</h1>
                <span className="block">{movie.year}</span>
                <ul className="-ml-2 flex max-w-md flex-wrap">
                  {movie.cast.map((name, i) => {
                    return (
                      <li
                        key={i}
                        className="border-r pl-2 pr-2 last:border-r-0"
                      >
                        {name}
                      </li>
                    );
                  })}
                </ul>
                <p className="lg:max-w-lg">{movie.synopsis}</p>
                <ul>
                  {movie.awards.map((award, i) => (
                    <li key={i}>{award}</li>
                  ))}
                </ul>
              </div>

              <div className="h-4/5">
                <img
                  className="max-h-full w-full max-w-lg object-contain"
                  src={movie.imgUrl}
                  alt=""
                />
              </div>
            </section>
          </>
        ))}
      </div>
    </div>
  );
}
