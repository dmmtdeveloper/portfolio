import { About } from "@/Components/About";
import { Divider } from "@/Components/Divider";
import Experience from "@/Components/Experience";
import { Intro } from "@/Components/Intro";
import { Projects } from "@/Components/Projects";
import { Skills } from "@/Components/Skills";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro/>
      <Divider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
     
    </main>
  )
}
