import React from "react";
import Image from 'next/image';

function FrontPage() {
  const data = {
    titulo: "Hola soy Katherin!",
    subtitulo: "Desarrolladora Front End",
    avatar: require("@/assets/img/avatar.jpg"),
  };
  return (
    <div id="frontpage">
      <div className="section-one">
        <span className="title">{data.titulo}</span>
        <span className="subtitle">{data.subtitulo}</span>
      </div>{" "}
      <div className="section-two">
        <span>   <Image src={data.avatar} alt="Avatar" className="avatar" /></span>{" "}
      </div>
    </div>
  );
}

export default FrontPage;
