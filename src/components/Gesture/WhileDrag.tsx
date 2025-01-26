import { motion } from "framer-motion";
import { useRef } from "react";

const WhileDrag = () => {
  const constraintRef = useRef(null);
  return (
    <div className="grid grid-cols-3 gap-x-5">
      <motion.div
        ref={constraintRef}
        className="h-[100px] w-14 border rounded-3xl overflow-hidden"
      >
        <motion.div
          drag="y"
          dragConstraints={constraintRef}
          dragElastic={0}
          dragMomentum={false}
          animate={{ width: ["200px"], height: ["100px"] }}
          className="bg-white cursor-pointer m-0 p-0"
        ></motion.div>
      </motion.div>

      <motion.div
        drag="x"
        whileDrag={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 100 }}
        dragMomentum={false}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 1 }}
        dragConstraints={{ left: 0, right: 400 }}
        className="w-[100px] h-[100px] border border-gray-400 rounded bg-white"
      ></motion.div>

      <motion.div ref={constraintRef} className="p-20 bg-violet-600 rounded-xl">
        <motion.div
          drag
          dragConstraints={constraintRef}
          dragElastic={0.1}
          className="w-[100px] h-[100px] border border-gray-400 rounded bg-white"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default WhileDrag;
