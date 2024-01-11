import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { eyeLogo, meta } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-gray-500`}>
            Welcome to <span className="text-[#915eff]">The EYE</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            {" "}
            We are a club under CSEA working on cyber security{" "}
          </p>
          <p className="mt-5 text-gray-400">
            Welcome to "The Eye" Cybersecurity Club! 🔐 <br />
            Are you passionate about the digital realm and the ever-evolving
            world of cybersecurity?
            <br /> Join us at "The Eye," where we peer into the heart of
            technology to safeguard and secure the digital landscape. 🌐 <br />
            <span className="font-bold">Our Mission:</span> At "The Eye," we are
            on a mission to explore, educate, and empower individuals in the
            field of cybersecurity. Our dedicated team of experts and
            enthusiasts is committed to:{" "}
            <span className="font-bold">Cyber Awareness:</span> Spreading
            awareness about the importance of online security and privacy.
            <span className="font-bold"> Skill Development:</span> Enhancing
            your cybersecurity skills through workshops, seminars, and hands-on
            training. <span className="font-bold">Ethical Hacking:</span>{" "}
            Encouraging ethical hacking practices to protect systems and
            networks.
          </p>
          <div className="mt-5 sm:flex flex-cols  lg:flex-row justify-between">
            <img
              src={eyeLogo}
              alt=""
              className="hidden md:mt-24 w-60 h-60 object-contain"
            />

            <div className="flex flex-col">
              <h1 className={`${styles.heroHeadText} mt-10 flex justify-end`}>
                Join the EYE !
              </h1>
              <div>
                <p className="mt-10 ml-10 text-gray-400">
                  🚀 Ready to level up your cybersecurity skills? Join 'The Eye'
                  Cybersecurity Club and dive deep into the exciting and
                  ever-evolving world of cyber defense. 💡 At 'The Eye,' we're
                  more than just a club; we're a community of passionate
                  individuals dedicated to safeguarding the digital realm.
                  Here's why you should consider joining us:
                </p>

                <p className="mt-3 ml-10 text-gray-400">
                  #CyberSecurity #JoinTheEye Join us, and together, let's secure
                  a safer digital future! 🔐🌐💻
                </p>
                
                {/* <button className="cursor-pointer" onClick={()=>window.open("https://join.cseatheeye.com/auth", "_blank")}>
                  Join us 
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
