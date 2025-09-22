import React from "react";
import Gallery from "../gallery";

type Props = {};

const Projects = (props: Props) => {
  return <section id="Projects" className="py-16">
    <h2 className="text-3xl font-bold mb-6">Projects</h2>
    <div className="bg-white rounded-lg">
      <Gallery />
    </div>
  </section>;
};

export default Projects;
