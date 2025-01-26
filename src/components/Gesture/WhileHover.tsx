import { motion } from "motion/react";

const WhileHover = () => {
  return (
    <motion.button
      //   onHoverStart={(e) => console.log(e)}
      //   onHoverEnd={(e) => console.log(e)}
      whileHover={{ scale: 1.02, width: "15%", color: "yellow", rotate: 3 }}
      className="text-gray-400 font-mono border border-gray-300 h-10 w-40 shadow shadow-white"
    >
      Hover Me
    </motion.button>
  );
};

export default WhileHover;
