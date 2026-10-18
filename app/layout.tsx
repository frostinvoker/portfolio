import type { Metadata } from "next";
import { Raleway, Merriweather,} from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import ProfileCard from "../components/profileCard";
import { cn } from "@/lib/utils";


const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicholas Gabriel",
  description: "Nicholas Gabriel Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", raleway.variable, merriweather.variable, "font-sans")}
    >
      <body className="min-h-full max-h-96 flex flex-col p-8 gap-5">
          <div className="w-full flex flex-row">
            <div className="w-2/6">
            </div>
            <div className="w-4/6 flex justify-center">
              <Navbar />
            </div>
          </div>
          <div className="min-h-full flex flex-row gap-10">
            <section className="w-2/6 flex justify-end">
              <ProfileCard />
            </section>
            <main className="w-4/6 flex flex-col items-center gap-2 overflow-y-auto pr-2 pb-5">
              {children}
            </main>
          </div>
        </body>
    </html>
  );
}
