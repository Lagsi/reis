import { movies } from "@/movies";
import MoviesNav from "../components/moviesNav";

export default function MoviesPage() {
  return (
    <div className="h-full md:flex gap-4 p-4 lg:p-0">
      <div className="w-1/4 hidden md:block">
        <MoviesNav movies={movies} />
      </div>
      <div>
        {movies.map((movie, i) => (
          <section
            key={i}
            className="lg:h-screen lg:max-h-[1080px] flex-col flex items-center lg:items-start lg:flex-row gap-10 first:mt-6 lg:last:h-[calc(100vh-8rem)]"
          >
            <div className="flex flex-col gap-3">
              <h1 id={movie.title} className="text-4xl">
                {movie.title}
              </h1>
              <span className="block">{movie.year}</span>
              <ul className="flex space-x-2 divide-x">
                {movie.cast.map((name, i) => (
                  <li key={i} className="pl-2 first:pl-0">
                    {name}
                  </li>
                ))}
              </ul>
              <p className="max-w-lg">{movie.synopsis}</p>
              <ul>
                {movie.awards.map((award, i) => (
                  <li key={i}>{award}</li>
                ))}
              </ul>
            </div>

            <div>
              <img src={movie.imgUrl} alt="" />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
