import { Inter } from "next/font/google";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Skills from "../components/skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <Projects />
        <Skills />
        <Experience />
        <Contact />
    </>
  );
}
