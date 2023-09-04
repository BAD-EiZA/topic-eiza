"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  imageHero: string;
  isDashboard?: boolean;
};
const Hero = ({ imageHero, isDashboard }: Props) => {
  return (
    <div className=" w-full bg-slate-800 h-[590px]">
      <div className="grid grid-cols-2">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
            className="px-10 pt-52"
          >
            {isDashboard ? (
              <>
                <div className="pb-2">
                  <span className="font-bold text-4xl text-slate-800  rounded-sm bg-slate-100">
                    Dashboard
                  </span>
                </div>
                <p className="font-semibold text-3xl text-white">
                  "Great people are not created from ease, pleasure and comfort.
                  They are formed through hardship, challenges and tears."
                </p>
              </>
            ) : (
              <>
                <p className="font-semibold text-4xl text-white ">
                  What{" "}
                  <span className="font-bold text-4xl text-slate-800  rounded-sm bg-slate-100">
                    Topic
                  </span>{" "}
                  would you like to learn today?{" "}
                </p>
                <div className="py-2">
                  <span className="font-bold text-4xl text-slate-800  rounded-sm bg-slate-100">
                    #MavisAI
                  </span>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
            className="max-h-[590px] relative "
          >
            <img
              src={imageHero}
              className="w-full h-[590px] object-cover"
              alt=""
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
