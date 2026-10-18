import Home from "./pages/home";
import Projects from "./pages/projects";
import Tools from "./pages/tools";
import Contacts from "./pages/contacts";
import ScrollReveal from "@/components/scrollReveal";

export default function Page() {
  return (
    <ScrollReveal className="w-full flex flex-col flex-1 gap-20">
      <Home />
      <Projects />
      <Tools />
      <Contacts />
    </ScrollReveal>
  );
}
