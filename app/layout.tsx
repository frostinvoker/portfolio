import type { Metadata } from "next";
import { Raleway, Merriweather,} from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import ProfileCard from "../components/profileCard";
import LandingTransition from "../components/landingTransition";
import { cn } from "@/lib/utils";
import styles from "./layout.module.css";


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
      <body className="min-h-full">
        <LandingTransition>
          <div className={styles.shell}>
            <header className={styles.header}>
              <Navbar />
            </header>
            <main className={styles.main}>
              <section aria-label="About Nicholas" className={styles.profile}>
                <ProfileCard />
              </section>
              <div className={styles.content}>
                {children}
              </div>
            </main>
          </div>
        </LandingTransition>
      </body>
    </html>
  );
}
