import React from "react";
import Gallery from "../gallery";

type Props = {};

const Projects = (props: Props) => {
  return <section id="Projects">
    <div className="bg-white rounded-lg">
      <Gallery />
    </div>
  </section>;
};

export default Projects;
