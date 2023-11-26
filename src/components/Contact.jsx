import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    contact: "",
    products: "",
    symptoms: "",
    vendor: "",
    vuln: "",
    impact: "",
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
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.cseatheeye.com/vulnrep",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      setForm({
        contact: "",
        products: "",
        symptoms: "",
        vendor: "",
        vuln: "",
        impact: "",
      });
    } catch (error) {
      console.error("Error Submitting form:", error);
    }
    setLoading(false);
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[5] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Report Vulnerablitiy</p>
        <h3 className={styles.sectionHeadText}>Vulnerablitiy reporting Form</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
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
              The product(s) affected:
            </span>
            <input
              type="text"
              name="products"
              value={form.products}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              The Exact Software Version or Model Affected:
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
            Vendor Details:
            </span>
            <input
              type="text"
              name="vendor"
              value={form.vendor}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Description of the Vulnerability along with steps to reproduce it:
            </span>
            <textarea
              rows={7}
              name="vuln"
              value={form.vuln}
              onChange={handleChange}
              placeholder="Any other Information"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Description of the Impact :
            </span>
            <textarea
              rows={7}
              name="impact"
              value={form.impact}
              onChange={handleChange}
              placeholder="Any other Information"
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

export default SectionWrapper(Contact, "Report Problem");
