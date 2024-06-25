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
        <FrontPage />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
