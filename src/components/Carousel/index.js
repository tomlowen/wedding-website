import { motion } from "framer-motion";

import image1 from "../../images/1.png";
import image2 from "../../images/2.png";

export function ControlledCarousel() {
  return (
    <div className="absolute top-20">
      <div className="absolute w-screen min-h-screen pb-2/3">
        <img
          className="w-full h-full absolute z-10 object-cover"
          src={image1}
          alt="Tom and Frankie in 2010"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
          className="w-full h-full absolute z-20 object-cover"
          src={image2}
          alt="Tom and Frankie in 2021"
        />
      </div>
      <div className="w-screen h-screen p-8 absolute z-30 font-bookman text-8xl font-bold text-center text-pink-700">
        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 2.7 }}
        >
          After 12 years...
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3.7 }}
        >
          We're getting married!
        </motion.p>
      </div>
    </div>
  );
}
