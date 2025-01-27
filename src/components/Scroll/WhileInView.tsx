import { motion } from "framer-motion";

const WhileInView = () => {
  return (
    <div className="grid grid-cols-1 w-[40%] mt-[90em]">
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
