import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact2 = () => {
  const formRef = useRef();
  
  const [form, setForm] = useState({
    date: "",
    contact: "",
    info: "",
    symptoms: "",
    tech: "",
    non_tech: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault(); // Add this to prevent default form submission
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.cseatheeye.com/increp",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      setForm({
        date: "",
        contact: "",
        info: "",
        symptoms: "",
        tech: "",
        non_tech: "",
      });
    } catch (error) {
      console.error("Error submitting form: ", error); // Remove the extra "error" string
    }
    setLoading(false);
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[70] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Report Incident</p>
        <h3 className={styles.sectionHeadText}>Incident Reporting Form</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Date when the incident Occurred:
            </span>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              placeholder="Set the date"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your contact details (Name, Email, Phone, etc. | Optional):
            </span>
            <input
              type="text"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Information regarding affected system/network/user:
            </span>
            <input
              type="text"
              name="info"
              value={form.info}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Symptoms observed/Background of incident:
            </span>
            <input
              type="text"
              name="symptoms"
              value={form.symptoms}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Relevant technical information:
            </span>
            <textarea
              rows={7}
              name="tech"
              value={form.tech}
              onChange={handleChange}
              placeholder="Any other info such as Security System Deployed, action taken to mitigate the damage etc"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Relevant non-technical information:
            </span>
            <textarea
              rows={7}
              name="non_tech"
              value={form.non_tech}
              onChange={handleChange}
              placeholder="Any other information"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      ></motion.div>
    </div>
  );
};

export default SectionWrapper(Contact2, "Report Problem");


