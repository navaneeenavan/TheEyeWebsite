import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC";
import { HallofFame } from "../Constants/api";

const ServiceCard = ({ data }) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-center items-center ">
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: data }}
              className="items-start"
            />
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Announcement = () => {
  const hof = HallofFame();
  const [data, setData] = useState(hof);

  return (
    <div className=" flex flex-col  mr-20 mx-auto mt-72 md:mt-20  ">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>HOME THE EYE</p>
        <h2 className={styles.sectionHeadText}>Announcements</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.6, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to our Announcements Center! Stay in the know with our latest
        updates, important news, and exciting developments. From product
        releases to company news, we've got it all covered. Get the inside scoop
        on what's happening right now, and stay informed with our curated
        announcements. Explore our announcements hub and be the first to know
        about our latest happenings!
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

export default SectionWrapper(Announcement, "Announcements");

