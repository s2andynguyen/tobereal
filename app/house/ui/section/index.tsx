"use client";
import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { slow } from "../animation";

// eslint-disable-next-line react/prop-types
function Section({ children, type = "up", delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <AnimatePresence>
    <motion.div
      ref={ref}
      variants={slow(type, delay)}
      initial={"hidden"}
      animate={isInView ? "show" : "hidden"}
      exit={"hidden"}
    >
      {children}
    </motion.div>
    </AnimatePresence>
  );
}
export default Section;

Section.propType = {
  children: Object.isRequired,
  type: String,
  duration: Number,
};
