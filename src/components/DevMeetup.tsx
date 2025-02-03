import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface Version {
  id: number;
  icon: string;
  version: string;
  delay: number;
}

const DevMeetup = () => {
  const versions: Version[] = [
    { id: 1, icon: "bi-check", version: "v1", delay: 0.6 },
    { id: 2, icon: "bi-check", version: "v2", delay: 0.9 },
    { id: 2, icon: "bi-hourglass-top", version: "v3", delay: 1.2 },
  ];

  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide the element after a delay (for example, 6 seconds)
    const timeout = setTimeout(() => {
      setShow(false);
    }, 6000); // adjust the delay as needed
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatePresence>
        {show && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: [0.8, 0.5, 0.3, 0] }}
              transition={{
                delay: 3,
                duration: 3,
              }}
              className="flex justify-center items-center gap-x-10  h-screen"
            >
              <motion.p
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 15 }}
                transition={{
                  delay: 0.3,
                  duration: 1,
                }}
                className="flex justify-center items-center font-mono text-xl text-blue-300"
              >
                {"<"}DevMeetUp <span className="bi-cup-hot-fill ms-2"></span>{" "}
                {"/>"}
              </motion.p>

              {versions.map((v) => (
                <motion.p
                  key={v.id}
                  layout
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 15 }}
                  transition={{
                    delay: v.delay,
                    duration: 0.5,
                  }}
                  className="font-mono relative text-xl"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -5 }}
                    animate={{
                      opacity: 1,
                      x: 5,
                      rotate: v.icon === "bi-hourglass-top" ? 360 : 0,
                    }}
                    transition={{
                      delay: 1.5,
                      duration: 1,
                      repeat: v.icon === "bi-hourglass-top" ? Infinity : 0,
                      repeatDelay: 0.5,
                    }}
                    className={`absolute -top-2 -right-4 ${v.icon} ${
                      v.icon === "bi-hourglass-top" && "text-sm"
                    } text-green-500`}
                  />
                  {v.version}
                </motion.p>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <p>Welcome</p>
    </>
  );
};

export default DevMeetup;
