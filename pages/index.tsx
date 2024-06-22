import { Inter } from "next/font/google";

import { Button } from "@nextui-org/button";
import WordFadeIn from "@/components/magicui/word-fade-in";
import Contact from "./contact";
import Experience from "./experience";
import Projects from "./projects";
import Skills from "./skills";
import FrontPage from "./frontpage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <section id="frontpage">
          <FrontPage />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}
