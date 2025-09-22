import React from "react";
import SvgGallery from '../technologies';

type Props = {};

const Skills = (props: Props) => {
  return <section id="Skills" className="py-16">
    <div className="skills__container">
      <div>
    <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <SvgGallery />

          </div>
    </div>
  </section>;
};

export default Skills;
