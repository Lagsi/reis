import MoviesNav from "../components/moviesNav";

export default function BioPage() {
  return (
    <div className="h-full min-h-[95vh] md:flex gap-4 p-4 lg:p-0 leading-7">
      <div className="w-1/4 hidden md:block border-r">
        <MoviesNav />
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="max-w-3xl lg:p-12">
          <img src="/reis.png" alt="Reis" className="w-full mb-8" />
          <h2 className="text-3xl font-bold text-center mb-8">Biography</h2>
          <p>
            After primary and secondary education, he settled in Istanbul. He
            studied music at Istanbul Municipal Conservatory and International
            Economics at Istanbul University Faculty of Economics. He worked as
            a reporter in Dünya newspaper and later in "Günaydin" newspaper for
            more than 10 years. He took part in the Video Newspaper project,
            which was Turkey's first private television initiative, within the
            "Günaydin" newspaper in 1984. He later became the director of this
            publication. He made a similar broadcast in Germany under the name
            "VIDEO SELAM FROM TURKEY". He made many commercials and 12
            documentary films. He continued his work on photography
            uninterruptedly. He opened photography exhibitions in 12 different
            countries. In 1992, he was among the founders of ATV television. He
            prepared and directed many programs. In 1995, he ended his studies
            in journalism, television and advertising and turned to cinema
            completely. He shot his first feature film in 1996. Çelik was
            attacked with an gun on April 21, 2005, in front of the Vakko store
            on Istiklal Street in Istanbul. He suffered serious injuries to his
            cheek and abdomen as a result of the incident.
          </p>
        </div>
      </div>
    </div>
  );
}
