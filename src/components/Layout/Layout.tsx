import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];
const navTabs = ["Home", "React", "TypeScript", "React Native"];
const initialOrder = ["#ff0088", "#dd00ee", "#9911ff", "#0d63f8"];

const Layout = () => {
  const [isOn, setIsOn] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedNav, setSelectedNav] = useState("Home");
  const [isExpanded, setIsExpanded] = useState(false);
  const [order, setOrder] = useState(initialOrder);
  const [notifications, setNotifications] = useState(
    Array.from({ length: 0 }, (_, i) => i + 1)
  );

  const shuffle = ([...array]: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  //   Reorder the backgrounds
  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
    return () => clearTimeout(timeout);
  }, [order]);

  //   Remove first array index
  useEffect(() => {
    if (notifications.length > 0) {
      const timeout = setTimeout(() => {
        setNotifications((prev) => prev.slice(1));
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [notifications]);

  // Handle delete for a specific index
  const handleDelete = (index: number) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="grid grid-cols-1 gap-y-10 pt-80 pb-10">
      {/* Toggle */}
      <motion.div layout>
        <button
          className={`flex w-[100px] h-[50px] bg-white rounded-full p-[5px]`}
          style={{
            justifyContent: "flex-" + (isOn ? "start" : "end"),
          }}
          onClick={() => setIsOn(!isOn)}
        >
          <motion.div
            layout
            transition={{
              type: "spring",
              visualDuration: 0.5,
              bounce: 0.2,
            }}
            className="w-[40px] h-[40px] bg-[#9911ff] rounded-full"
          ></motion.div>
        </button>
      </motion.div>

      {/* Tab */}
      <div className="bg-white rounded-lg p-1 pb-20">
        <ul className="flex mb-5">
          {tabs.map((t) => (
            <motion.li
              key={t.label}
              initial={false}
              animate={{
                backgroundColor: t === selectedTab ? "#eee" : "#eee0",
              }}
              className={`px-10 py-2 rounded-t relative cursor-pointer flex justify-between items-center flex-1 text-[#0f1115] text-sm`}
              onClick={() => setSelectedTab(t)}
            >
              {t.label}
              {t === selectedTab && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-400 z-50 rounded-b"
                ></motion.div>
              )}
            </motion.li>
          ))}
        </ul>
        <main className="flex justify-center items-center flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ fontSize: 128 }}
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Navbar */}
      <div>
        <ul className="flex justify-evenly w-full gap-x-4">
          {navTabs.map((n) => (
            <motion.li
              key={n}
              initial={false}
              onClick={() => setSelectedNav(n)}
              className={`relative z-50 border border-gray-500 px-4 py-2 text-sm rounded-xl flex justify-between items-center cursor-pointer text-white`}
            >
              {n}
              {n === selectedNav && (
                <motion.div
                  layoutId="slide"
                  className="bg-blue-500 absolute -z-10 h-full w-full left-0 rounded-xl"
                ></motion.div>
              )}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Expand input */}
      <motion.div
        layout
        className="relative bg-zinc-700 rounded flex justify-center items-center"
        style={{
          width: isExpanded ? 300 : 150,
          height: isExpanded ? 200 : 100,
        }}
      >
        <div>
          {isExpanded ? (
            <div className="ms-[10px]">
              <label
                htmlFor="message"
                className="text-blue-200 text-sm font-mono"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                autoFocus
                className="resize-none rounded-lg bg-white w-[280px] h-[120px] mt-2 text-black p-2 font-mono"
              ></textarea>
              <button
                onClick={() => setIsExpanded(false)}
                className="font-mono absolute  right-2 top-1"
              >
                x
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm border bg-white text-black  font-mono px-2 py-[2px] rounded"
            >
              Write message
            </button>
          )}
        </div>
      </motion.div>

      {/* Reordering */}
      <div>
        <ul className="flex flex-row relative flex-wrap gap-5 w-[300px]">
          {order.map((bg) => (
            <motion.li
              layout
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 300,
              }}
              key={bg}
              style={{
                backgroundColor: bg,
              }}
              className="h-[90px] w-[90px] rounded-xl"
            ></motion.li>
          ))}
        </ul>
      </div>

      {/* Notifications */}
      <div>
        <motion.button
          whileTap={{ scale: 1.1, rotate: 1 }}
          onClick={() => setNotifications((prev) => [...prev, prev.length + 1])}
          className="active:shadow-none bg-blue-500 rounded-lg font-mono px-10 py-2 shadow shadow-white"
        >
          Add Notifications +
        </motion.button>

        {/* Notification */}
        <div className="fixed bottom-5 right-2 grid grid-cols-1 gap-y-3">
          <AnimatePresence initial={false}>
            {notifications.map((msg, index) => (
              <motion.div
                key={msg}
                layout
                exit={{ opacity: 0, y: 100 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.05,
                  type: "spring",
                  stiffness: 150,
                }}
                viewport={{ once: true }}
                className="relative border bg-zinc-800 border-gray-500 h-22 w-80 rounded-xl p-3"
              >
                <button
                  onClick={() => handleDelete(index)}
                  className="absolute top-1 right-3 font-mono z-0"
                >
                  x
                </button>
                <p className="text-sm font-mono bg-blue-500 w-28 text-center rounded">
                  Notification
                </p>
                <p className="text-xs font-mono font-bold mt-3 bg-white text-black rounded p-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, sequi?...{msg}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Layout;
