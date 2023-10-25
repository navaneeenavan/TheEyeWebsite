import axios from "axios";
import { useState, useEffect } from "react";

const HallofFame = () => {
  const [cont, setCont] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.cseatheeye.com/home')
      .then((res) => {
        setCont(res.data);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return cont;
  
};

export { HallofFame };













