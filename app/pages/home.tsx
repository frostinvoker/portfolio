export default function Home() {
    return(
      <section id="home" className="min-h-dvh flex flex-col gap-5">
        <div data-scroll-reveal className="flex flex-col">
          <h1 className="text-(--h1color)">SOFTWARE</h1>
          <h1 className="text-(--h1altcolor)">DEVELOPER</h1>
        </div>
        <p data-scroll-reveal className="text-(--paltcolor)">
          Passionate about developing Web and Mobile applications, with strong interest in Network and System Security.
        </p>
        <p data-scroll-reveal className="text-(--paltcolor)">
          I specialize in Computer Security, and have experience across full-stack projects.
        </p>
        <p data-scroll-reveal className="text-(--paltcolor)">
          Beyond software, I enjoy working with embedded systems, such as Arduino and ESP32 for IoT solutions, and Networking tools.
        </p>
      </section>
    )
}
