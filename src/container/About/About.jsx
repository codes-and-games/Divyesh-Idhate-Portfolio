import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        <span>About</span> Me
      </h2>
      <br></br>
      <br></br>
      <p>
        Hola! Myself Divyesh Idhate aka pirateSteel! I am 13 and a High School
        Student. I just LOVE Information Technology and also work as a <span></span>
        <a href="https://www.fiverr.com/divyeshidhate">freelancer</a>. My goal is to give a contribution in this enourmous change
        in the society being brought by Technology! I have been in the IT community for 2 years and have gained a wealth of information! I have contributed and completed over 20 open source projects. I also have stood first 5 times in various hackathons! These are the topics I study about:
      </p>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
