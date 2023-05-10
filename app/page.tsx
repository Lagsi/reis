import Image from "next/image";
import Cat from "../public/pexels-sam-lion-6001385.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:px-8 md:pb-4 lg:flex lg:justify-between lg:flex-col">
      <div className="grid lg:grid-cols-2 lg:justify-between">
        <div className="flex flex-col gap-4 items-center">
          <div className="h-1/2 w-full max-w-md md:w-[600px] relative">
            <Image src={Cat} alt="portrait" style={{ objectFit: "cover" }} />
          </div>
          <div className="h-1/2 w-full max-w-md md:w-[600px] relative ">
            <Image src={Cat} alt="portrait" style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className="md:p-8 flex items-center justify-center order-first lg:order-last lg:justify-start lg:items-start">
          <h1 className="text-6xl p-4 font-bold text-center lg:text-9xl lg:p-0">
            Reis Çelik
          </h1>
        </div>
      </div>

      <nav>
        <ul className="flex justify-around flex-wrap gap-3 mt-8 lg:max-w-xl lg:mx-auto">
          <li>
            <Link href={"/movies"}>Movies</Link>
          </li>
          <li>
            <Link href={"/photos"}>Photography</Link>
          </li>
          <li>
            <Link href={"/awards"}>Awards</Link>
          </li>
          <li>
            <Link href={"/bio"}>Biography</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
