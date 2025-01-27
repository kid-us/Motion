import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const WhileInView = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    bounce: 0,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#f00", "#0f0", "#00f"]
  );

  return (
    <div className="grid grid-cols-1 w-[40%] mt-[90em]">
      <motion.div
        className="container mx-auto rounded-full"
        style={{
          scaleX,
          position: "fixed",
          top: 20,
          left: 0,
          right: 0,
          originX: 0,
          height: 10,
          background,
        }}
      ></motion.div>

      <ScrollComponent>
        <div className="bg-zinc-900 p-5 rounded-xl border border-gray-500 mb-20">
          <p className="text-sm font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam
            recusandae obcaecati nisi ad fugiat dicta nostrum voluptate, fugit,
            rem vitae dolorem hic pariatur veritatis culpa provident sequi ut
            quasi maxime impedit itaque repellendus. Eaque id delectus corrupti
            tenetur eveniet aperiam dolore et. Pariatur officia molestiae
            voluptatum consequuntur reiciendis repudiandae ex aut provident
            accusamus aperiam velit veniam cum qui sit dicta perspiciatis,
            facere doloremque quia fugit sunt. Iure officiis tenetur distinctio,
            nihil alias incidunt magni ad atque praesentium voluptatibus at!
            Ratione, sit error tenetur quis fuga reiciendis totam sapiente eaque
            quibusdam? Animi similique totam quam! Aspernatur modi consequatur
            impedit quod?
          </p>
        </div>
      </ScrollComponent>

      <ScrollComponent>
        <div className="bg-zinc-900 p-5 rounded-xl border border-gray-500 mb-20">
          <p className="text-sm font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam
            recusandae obcaecati nisi ad fugiat dicta nostrum voluptate, fugit,
            rem vitae dolorem hic pariatur veritatis culpa provident sequi ut
            quasi maxime impedit itaque repellendus. Eaque id delectus corrupti
            tenetur eveniet aperiam dolore et. Pariatur officia molestiae
            voluptatum consequuntur reiciendis repudiandae ex aut provident
            accusamus aperiam velit veniam cum qui sit dicta perspiciatis,
            facere doloremque quia fugit sunt. Iure officiis tenetur distinctio,
            nihil alias incidunt magni ad atque praesentium voluptatibus at!
            Ratione, sit error tenetur quis fuga reiciendis totam sapiente eaque
            quibusdam? Animi similique totam quam! Aspernatur modi consequatur
            impedit quod?
          </p>
        </div>
      </ScrollComponent>

      <ScrollComponent>
        <div className="bg-zinc-900 p-5 rounded-xl border border-gray-500 mb-20">
          <p className="text-sm font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam
            recusandae obcaecati nisi ad fugiat dicta nostrum voluptate, fugit,
            rem vitae dolorem hic pariatur veritatis culpa provident sequi ut
            quasi maxime impedit itaque repellendus. Eaque id delectus corrupti
            tenetur eveniet aperiam dolore et. Pariatur officia molestiae
            voluptatum consequuntur reiciendis repudiandae ex aut provident
            accusamus aperiam velit veniam cum qui sit dicta perspiciatis,
            facere doloremque quia fugit sunt. Iure officiis tenetur distinctio,
            nihil alias incidunt magni ad atque praesentium voluptatibus at!
            Ratione, sit error tenetur quis fuga reiciendis totam sapiente eaque
            quibusdam? Animi similique totam quam! Aspernatur modi consequatur
            impedit quod?
          </p>
        </div>
      </ScrollComponent>
    </div>
  );
};

const ScrollComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default WhileInView;
