import React from "react";
import SvgGallery from '../technologies';

type Props = {};

const Skills = (props: Props) => {
  return <section id="Skills">
    <div className="skills__container">
          <SvgGallery />
    </div>
  </section>;
};

export default Skills;
