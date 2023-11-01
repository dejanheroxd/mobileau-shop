import React from "react";
import threeSofa from "../../assets/Luminosité Louis/threeSofas.webp";
import chairInRoom from "../../assets/Luminosité Louis/chair/chairInRoom.webp";
import { motion } from "framer-motion";

export default function PicturesSection() {
  return (
    <div>
      <div className="sm:flex sm:justify-center sm:gap-x-3">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          viewport={{ once: true }}
        >
          <img className="h-full sm:w-full" src={threeSofa} alt="" />
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.2 },
          }}
          viewport={{ once: true }}
        >
          <img className="h-full sm:w-full" src={chairInRoom} alt="" />
        </motion.div>
      </div>
    </div>
  );
}
