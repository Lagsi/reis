import Image from "next/image";
import night from "../public/night-of-silent.png";
import intrasigence from "../public/tales-of-intransigence.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-1rem)] p-4 md:px-8 md:pb-4 lg:flex lg:justify-between mx-auto max-w-[1800px] lg:flex-col">
      <div className="grid lg:grid-cols-[1fr,0.7fr] lg:justify-between h-full">
        <div className="flex flex-col gap-4 items-center lg:w-4/5">
          <div className="w-full max-w-3xl">
            <Image src={intrasigence} alt="portrait" />
          </div>
          <div className="w-full max-w-3xl">
            <Image src={night} alt="portrait" />
          </div>
        </div>
        <div className="flex items-center justify-center order-first md:p-8 lg:order-last lg:flex-col lg:justify-between lg:items-center">
          <h1 className="text-6xl font-Playfair uppercase p-4 font-bold text-center lg:text-9xl lg:p-0">
            Reis
            <br /> Çelik
          </h1>
          <nav className="hidden lg:block lg:w-full">
            <ul className="grid grid-cols-2 justify-items-center gap-3 mt-8 x lg:max-w-xl lg:mx-auto">
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
        <ul className="flex justify-around flex-wrap gap-3 mt-8 x lg:max-w-xl lg:mx-auto">
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
