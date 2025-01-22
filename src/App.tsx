import "./App.css";
import { motion } from "motion/react";

function App() {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <motion.div
        animate={{ rotate: 360, transition: { duration: 2 } }}
        className="bg-[#ff0088] w-[120px] h-[120px] rounded-lg"
      ></motion.div>
    </div>
  );
}

export default App;
