import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import { HomeContainer } from "../src/home";

export default function Home() {
  const { push } = useRouter();

  const redirect = () => {
    push("/commissions");
  };

  const scrollDown = () => {
    window.scrollBy({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <HomeContainer>
      <div className="header">
        <img className="pfp" src="/header.png" alt="" />
        <h1>Suzume Gio</h1>
        <p>My name is Suzume Gio and I'm a Vtuber, Artist and Rigger.</p>
        <motion.img
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 1.5,
              yoyo: Infinity,
              // repeatType: "loop",
            },
          }}
          whileHover={{
            y: 0,
          }}
          onClick={scrollDown}
          className="arrow-down"
          src="/arrowDown.png"
          alt=""
        />
      </div>
      <div className="content">
        <h2>Social Media</h2>
        <div className="social-media">
          <div
            className="item"
            onClick={() => {
              window.open("https://twitter.com/SuzumeGio", "_blank");
            }}
          >
            Twitter
          </div>
          <div
            onClick={() => {
              window.open("https://www.twitch.tv/suzumegio", "_blank");
            }}
            className="item"
          >
            Twitch
          </div>
          <div
            onClick={() => {
              window.open(
                "https://www.youtube.com/channel/UCnvL2ffLsRu1DoaiSYFMZww/featured",
                "_blank"
              );
            }}
            className="item"
          >
            Youtube
          </div>
        </div>
        <h2>Figma</h2>
        <iframe
          style={{ width: "100%", height: "75vh" }}
          src="https://trello.com/b/gOkXVD0Z.html"
        ></iframe>
      </div>
    </HomeContainer>
  );
}
