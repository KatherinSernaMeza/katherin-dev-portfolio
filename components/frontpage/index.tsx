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
          <div className="text-7xl pb-4 font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-purple-800">
            {" "}
            {data.titulo}
          </div>
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
