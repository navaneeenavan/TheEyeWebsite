import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { Adithya } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC";
import { HallofFame as Hall } from "../Constants/api";
import axios from "axios";

const HallofFame = () => {
  const [cont, setCont] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.cseatheeye.com/home")
      .then((res) => {
        setCont(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="flex flex-col  mt-24">
      <motion.div variants={textVariant()}>
        <motion.h1
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.heroHeadText} flex justify-center blue-text-gradient`}
        >
          Hall of Fame
        </motion.h1>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="flex flex-col md:flex-row justify-center gap-10 mx-auto mt-10 "
      >
        {cont && cont.HOF.names ?
          cont.HOF.names.map((value, idx) => <Card name={value} key={idx} />) : "Loading..."}
      </motion.div>
    </div>
  );
};

const Card = ({ name }) => {
  return (
    <div className="flex flex-col h-32 w-60 rounded-md border-[1px] border-violet-700  justify-center">
      <div className="flex flex-row justify-center">
        <p className="flex items-center  text-sm text-white">{name}</p>
      </div>
    </div>
  );
};

export default SectionWrapper(HallofFame, "Home");
