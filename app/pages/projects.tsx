import Image from "next/image";

export default function Projects(){
    return(
      <section id="projects" className="portfolio-section flex flex-col gap-8 sm:gap-10">
        <div data-scroll-reveal className="flex flex-col">
          <h1 className="text-(--h1color)">NOTABLE</h1>
          <h1 className="text-(--h1altcolor)">PROJECTS</h1>
        </div>
        <div data-scroll-reveal className="flex flex-col gap-5">
          <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="w-full sm:w-1/3 aspect-video sm:aspect-auto sm:h-48 shrink-0 bg-blue-500 overflow-hidden rounded-2xl">
              <Image src="/projectsImgs/proj1.png" width={300} height={500} alt="Microjobs Image" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 33vw, 22vw" className="block h-full w-full object-cover"/>
            </div>
            <div className="min-w-0 flex-1 flex flex-col justify-center gap-2">
              <h2 className="text-(--h2altcolor)">Microjobs</h2>
              <p className="text-(--pcolor)">A centralized community-based microjobs with secure e-wallet. Available for both mobile and web.</p>
            </div>
          </div>
        </div>
        <div data-scroll-reveal className="flex flex-col gap-5">
          <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="w-full sm:w-1/3 aspect-video sm:aspect-auto sm:h-48 shrink-0 bg-blue-500 overflow-hidden rounded-2xl">
              <Image src="/projectsImgs/proj2.png" width={300} height={500} alt="Hospital Management System Image" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 33vw, 22vw" className="block h-full w-full object-cover"/>
            </div>
            <div className="min-w-0 flex-1 flex flex-col justify-center gap-2">
              <h2 className="text-(--h2altcolor)">Hospital Management System w AI Chatbot</h2>
              <p className="text-(--pcolor)">A web app used to streamline hospital management with an integrated AI Chatbot and Smart Contract Integration. </p>
            </div>
          </div>
        </div>
        <div data-scroll-reveal className="flex flex-col gap-5">
          <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="w-full sm:w-1/3 aspect-video sm:aspect-auto sm:h-48 shrink-0 bg-blue-500 overflow-hidden rounded-2xl">
              <Image src="/projectsImgs/proj3.png" width={300} height={500} alt="Floodwatch Image" sizes="(max-width: 639px) 100vw, (max-width: 1023px) 33vw, 22vw" className="block h-full w-full object-cover"/>
            </div>
            <div className="min-w-0 flex-1 flex flex-col justify-center gap-2">
              <h2 className="text-(--h2altcolor)">FloodWatch</h2>
              <p className="text-(--pcolor)">A mobile app used to monitor flood-level on the street of Dagupan City using Arduino sensors.</p>
            </div>
          </div>
        </div>
      </section>
    )
}
