import React from "react";
import { styles } from "../styles";
import { Adithya } from "../assets";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC";

const HallofFame = () => {
  return (
    <div className="flex flex-col relative mt-24">
      <motion.div variants={textVariant()}>
        <motion.h1 variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.heroHeadText} flex justify-center blue-text-gradient`}
        >
          Hall of Fame
        </motion.h1>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="flex flex-col md:flex-row justify-center gap-10 mx-auto mt-10 "
      >
        {/* card degin */}
        <Card name="Adithya Rengarajan R" designation="Founder The EYE">
          The work they did. The work they did. The work they did. The work they
          did. The work they did. The work they did.
        </Card>
        <Card name="Adithya Rengarajan R" designation="Founder The EYE">
          The work they did. The work they did. The work they did. The work they
          did. The work they did. The work they did.
        </Card>
        <Card name="Adithya Rengarajan R" designation="Founder The EYE">
          The work they did. The work they did. The work they did. The work they
          did. The work they did. The work they did.
        </Card>
      </motion.div>
    </div>
  );
};

const Card = ({ name, children, designation }) => {
  return (
    <div className="flex flex-col h-64 w-96 rounded-md bg-violet-500 pl-8">
      <h1 className="pt-8">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</h1>
      <p className="pt-5">{children}</p>
      <div className="flex flex-row">
        <div>
          <p className="pt-5 text-gray-900 text-sm">{name}</p>
          <p className="text-gray-700 text-sm">{designation}</p>
        </div>
        <img
          src={Adithya}
          alt=""
          className="border-2 rounded-full h-16 w-20 object-contain ml-10 mt-2"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(HallofFame, "Halloffame");
