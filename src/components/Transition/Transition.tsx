import { motion } from "motion/react";

const Transition = () => {
  return (
    // Transition defines the type of animation used when animating between two values.
    <>
      <motion.div
        animate={{ baseFrequency: 0.5 }}
        transition={{ type: "spring", mass: 0.5 }}
        // animate={{
        //   x: [0, 50, 100, 200],
        //   rotate: [0, 10, 20, 0],
        //   transition: {
        //     times: [0, 0.3, 1],
        //     duration: 2,

        //     // delay: 0.5,
        //     // type: "spring",
        //     // stiffness: 100,
        //     // damping: 20,
        //     // bounce: 0.5,
        //   },
        // }}
        className="bg-blue-500 shadow shadow-white w-[100px] h-[100px] rounded"
      ></motion.div>
    </>
  );
};

export default Transition;
