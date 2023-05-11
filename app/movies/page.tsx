import { movies } from "@/movies";

export default function MoviesPage() {
  return (
    <div className="flex">
      <div className="h-[calc(100vh-8rem)] w-1/4 sticky top-28 text-center mt-28">
        <nav>
          <ul className="flex flex-col gap-3 items-center">
            {movies.map((movie, i) => (
              <li
                key={i}
                className="w-fit hover:opacity-50 active:line-through visited:line-through focus:line-through"
              >
                <a className="w-fit" href={`#${movie.title}`}>
                  <h3 className="text-2xl">{movie.title}</h3>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div>
        {movies.map((movie, i) => (
          <section
            key={i}
            className="h-screen max-h-[1080px] flex gap-10 first:mt-6 last:h-[calc(100vh-8rem)]"
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
