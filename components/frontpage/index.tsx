import React from "react";
import Image from "next/image";
import WordFadeIn from "@/components/magicui/word-fade-in";
import TypingAnimation from "@/components/magicui/typing-animation";
import SparklesText from "@/components/magicui/sparkles-text";

function FrontPage() {
  const data = {
    titulo: "Hola soy Katherin!",
    subtitulo: "Desarrolladora Front End",
    avatar: require("@/assets/img/avatar.jpg"),
  };
  return (
    <div id="frontpage">
      <div className="section-one">
        <div className="title-container">
          {/* <WordFadeIn words={data.titulo} className="bg-text" /> */}
          {/* <span className="subtitle">{data.subtitulo}</span> */}
          <TypingAnimation
            className="text-7xl pb-4"
            text={data.titulo}
          />
          <SparklesText text={data.subtitulo} className="subtitle" />
        </div>
      </div>{" "}
      <div className="section-two">
        <span>
          {" "}
          <Image src={data.avatar} alt="Avatar" className="avatar" />
        </span>{" "}
      </div>
    </div>
  );
}

export default FrontPage;
