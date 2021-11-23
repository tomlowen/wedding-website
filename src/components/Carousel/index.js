import { motion } from "framer-motion";

import image1 from "../../images/1.png";
import image2 from "../../images/2021.png";

export function ControlledCarousel() {
  return (
    <div className="absolute top-10">
      <div className="absolute max-w-screen w-screen min-h-screen pb-2/3">
        <img
          className="w-full h-full absolute z-10 object-cover"
          src={image1}
          alt="Tom and Frankie in 2010"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
          className="w-full h-full absolute z-10 object-cover"
          src={image2}
          alt="Tom and Frankie in 2021"
        />
      </div>
      <div className="h-screen max-w-screen flex place-items-center p-5 ">
        <div className="flex max-w-3xl z-20 font-bookman text-7xl font-bold text-center text-pink-700 transform translate-y-12">
          <motion.p
            className="max-w-screen"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 2.7 }}
          >
            After 12 years...
          </motion.p>
          <motion.p
            className="absolute max-w-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 3.7 }}
          >
            We're getting married!
          </motion.p>
        </div>
      </div>
    </div>
  );
}
