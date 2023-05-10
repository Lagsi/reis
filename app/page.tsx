import Image from "next/image";
import Cat from "../public/pexels-sam-lion-6001385.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:px-8 md:pb-8">
      <div className="grid grid-rows-[.2fr,1fr]">
        <div className="flex flex-col gap-4 items-center">
          <div className="h-1/2 w-full max-w-md md:w-[600px] relative ">
            <Image src={Cat} alt="portrait" style={{ objectFit: "cover" }} />
          </div>
          <div className="h-1/2 w-full max-w-md md:w-[600px] relative ">
            <Image src={Cat} alt="portrait" style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className="xl:p-8 flex items-center justify-center order-first">
          <h1 className="text-6xl font-bold text-center xl:text-9xl">
            Reis Çelik
          </h1>
        </div>
      </div>

      <nav>
        <ul className="flex justify-around mt-8">
          <li>
            <Link href={"/"}>Hello</Link>
          </li>
          <li>
            <Link href={"/"}>It's</Link>
          </li>
          <li>
            <Link href={"/"}>Me</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
