import { motion } from "motion/react";

const WhileTap = () => {
  return (
    <motion.button
      whileTap={{ x: 10, y: 10 }}
      transition={{ type: "spring", stiffness: 200 }}
      onClick={() => console.log("You just clicked me!")}
      className="text-gray-400 font-mono border border-gray-300 h-10 w-40 shadow shadow-white"
    >
      Hover Me
    </motion.button>
  );
};

export default WhileTap;
