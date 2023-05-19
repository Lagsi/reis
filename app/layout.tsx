import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./components/footer";
import BurgerMenu from "./components/burgerMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reis Çelik",
  description: "Reis Çelik's website showing his previous work and awards",
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="md:snap-y md:snap-mandatory">
      <body className={`${inter.className} px-4`}>
        <div className="md:hidden">
          <BurgerMenu />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
