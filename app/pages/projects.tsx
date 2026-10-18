import Image from "next/image";

export default function Projects(){
    return(
      <section id="projects" className="min-h-dvh flex flex-col gap-10">
        <div data-scroll-reveal className="flex flex-col">
          <h1 className="text-(--h1color)">NOTABLE</h1>
          <h1 className="text-(--h1altcolor)">PROJECTS</h1>
        </div>
        <div data-scroll-reveal className="flex flex-col gap-5">
          <div className="w-full h-48 flex flex-row gap-5">
            <div className="w-1/3 h-full bg-blue-500">
              <Image src="/projectsImgs/proj1.png" width={300} height={500} alt="Microjobs Image" className="block h-full w-full"/>
            </div>
            <div className="w-2/3 flex flex-col justify-center">
              <h2 className="text-(--h2altcolor)">Microjobs</h2>
              <p className="text-(--pcolor)">A centralized community-based microjobs with secure e-wallet. Available for both mobile and web.</p>
            </div>
          </div>
        </div>
        <div data-scroll-reveal className="flex flex-col gap-5">
          <div className="w-full h-48 flex flex-row gap-5">
            <div className="w-1/3 h-full bg-blue-500">
              <Image src="/projectsImgs/proj2.png" width={300} height={500} alt="Hospital Management System Image" className="block h-full w-full"/>
            </div>
            <div className="w-2/3 flex flex-col justify-center">
              <h2 className="text-(--h2altcolor)">Hospital Management System w AI Chatbot</h2>
              <p className="text-(--pcolor)">A web app used to streamline hospital management with an integrated AI Chatbot and Smart Contract Integration. </p>
            </div>
          </div>
        </div>
        <div data-scroll-reveal className="flex flex-col gap-5">
          <div className="w-full h-48 flex flex-row gap-5">
            <div className="w-1/3 h-full bg-blue-500">
              <Image src="/projectsImgs/proj3.png" width={300} height={500} alt="Floodwatch Image" className="block h-full w-full"/>
            </div>
            <div className="w-2/3 flex flex-col justify-center">
              <h2 className="text-(--h2altcolor)">FloodWatch</h2>
              <p className="text-(--pcolor)">A mobile app used to monitor flood-level on the street of Dagupan City using Arduino sensors.</p>
            </div>
          </div>
        </div>
      </section>
    )
}
