import MoviesNav from "../components/moviesNav";

export default function BioPage() {
  return (
    <div className="h-full min-h-[95vh] md:flex gap-4 lg:p-0 leading-7">
      <MoviesNav />

      <div className="flex justify-center items-center w-full mt-20 lg:mt-0">
        <div className="max-w-3xl lg:p-12">
          <img src="/reis.png" alt="Reis" className="w-full mb-8" />
          <h2 className="text-3xl font-bold text-center mb-8">Biography</h2>
          <p>
            Reis Çelik was born in Ardahan, in east Anatolia, in 1961. He moved
            to Istanbul after junior high school and studied music and theatre
            at the State Conservatoire. In 1982 he began a career in journalism,
            working as an economics/political correspondent for various national
            newspapers. In the following years, both his interviews and
            photographs appeared in several international newspapers and
            magazines. Around the same time, he began making documentary films,
            commercial and political campaign films, as well as maintaining an
            active interest in still photography. To date Çelik's photographic
            work has been featured in exhibitions in over 12 countries. In 1996
            he directed his debut feature, ‘Işıklar Sönmesin’ (“Let There Be
            Light”), a humanitarian take on the Kurdish conflict in southeast
            Turkey, which won several awards on the international festival
            circuit. He followed this with another feature ‘Hoşçakal Yarın’
            (‘Goodbye Tomorrow’) in 1998, which focuses on a key figure of the
            Turkish students’ movement who was executed in the early 1970s. He
            made his third film ‘İnat Hikayeleri’ (‘Tales of Intransigence’),
            all improvised feature, in 2004. Fallowing‘Mülteci’ (“Refugee”) in
            2008, ‘Lal Gece’ (“Night Of Silence”) 2012 is Reis Celik’s 5th
            feature film. ‘Food For A Funeral’ (2019)
          </p>
        </div>
      </div>
    </div>
  );
}
