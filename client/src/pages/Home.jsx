import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section
          className="home"
          {...slideAnimation("left")}
        >
          <motion.header {...slideAnimation("down")}>
            <a href="http://localhost:3000/">
              <img
                src="./gclogo.png"
                alt="logo"
                style={{ width: "100px", height: "55px" }}
                className="w-10 h-10 object-contain"
              />
            </a>
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                Create <br className="xl:block hidden" /> Your Own.
              </h1>
            </motion.div>

            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-base" style={{ color: "#49494F"}}>
                "Welcome to our Nail Art Customizer! Explore endless
                possibilities with our 3D models. From chic everyday styles to
                bold statement looks, express yourself like never before!{" "}
                <strong style={{ color: "#333333", fontStyle: "italic" }}>
                  Design your unique masterpiece with ease.
                </strong>{" "}
                Let your creativity shine!"
              </p>

              <button
                className="custom-button"
                onClick={() => (state.intro = false)}
              >
                Customize It
              </button>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
