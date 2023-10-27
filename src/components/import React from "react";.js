import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC";
import { HallofFame } from "../Constants/api";

const ServiceCard = ({ data }) => {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <div className ="flex">
            <div dangerouslySetInnerHTML={{ __html: data }} className="flex "/>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};


const Announcement = () => {
  const hof = HallofFame();
  console.log("HOF:" , hof);
  return (
    <div className=" mx-auto mt-72 md:mt-20">
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>FOR YOUR ATTENTION</p>
      <h2 className={styles.sectionHeadText}>Announcements</h2>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      random text we want random text we want random text we want random text
      we want random text we want random text we want random text we want
      random text we want
    </motion.p>
    <div className="mt-20 flex flex-wrap justify-center gap-10">
      {hof.announcements ? (
        hof.announcements.map((announcement, index) => (
          <div key={index}>
            {/* {console.log(announcement)} Move the console.log here */}
            <ServiceCard data={[announcement]} />
          </div>
        ))
      ) : (
        <p>Loading announcements...</p>
      )}
    </div>
  </div>
  );
};

export default SectionWrapper(Announcement, "Announcement");
