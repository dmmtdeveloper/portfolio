import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Divider from "@/Components/Divider";
import Experience from "@/Components/Experience";
import Intro from "@/Components/Intro";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact/>
    </main>
  );
}
