import { Inter } from "next/font/google";

import WordFadeIn from "@/components/magicui/word-fade-in";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Skills from "../components/skills";
import FrontPage from "../components/frontpage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <a href="#contact">Contacto</a>
        <a href="#experience">Experiencia</a>
        <a href="#frontpage">Portada</a>
        <a href="#projects">Proyectos</a>
        <a href="#skills" className="">Habilidades</a>
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        <FrontPage />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
