import Image from "next/image";
import night from "../public/night-of-silent.png";
import intrasigence from "../public/tales-of-intransigence.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto mb-8 min-h-[calc(100vh-1rem)] max-w-[1800px] pt-4 md:px-8 lg:mb-0 lg:flex lg:flex-col lg:justify-between lg:pb-4">
      <div className="grid h-full lg:grid-cols-[1fr,0.7fr] lg:justify-between">
        <div className="flex flex-col items-center gap-4 lg:w-4/5">
          <div className="w-full max-w-3xl">
            <Image src={intrasigence} alt="portrait" />
          </div>
          <div className="w-full max-w-3xl">
            <Image src={night} alt="portrait" />
          </div>
        </div>
        <div className="order-first flex items-center justify-center md:p-8 lg:order-last lg:flex-col lg:items-center lg:justify-between">
          <h1 className="p-4 text-center font-Playfair text-6xl font-bold uppercase lg:p-0 lg:text-9xl">
            Reis
            <br /> Çelik
          </h1>
          <nav className="hidden lg:block lg:w-full">
            <ul className="x mt-8 grid grid-cols-2 justify-items-center gap-3 lg:mx-auto lg:max-w-xl">
              <li>
                <Link className="hover:opacity-50" href={"/movies"}>
                  Movies
                </Link>
              </li>
              <li>
                <Link className="hover:opacity-50" href={"/photography"}>
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
      </div>
      <nav className="lg:hidden lg:w-full">
        <ul className="x mt-8 flex flex-wrap justify-around gap-3 lg:mx-auto lg:max-w-xl">
          <li>
            <Link href={"/movies"}>Movies</Link>
          </li>
          <li>
            <Link href={"/photography"}>Photography</Link>
          </li>

          <li>
            <Link href={"/awards"}>Awards</Link>
          </li>
          <li>
            <Link href={"/biography"}>Biography</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
