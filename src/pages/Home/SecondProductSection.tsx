import React from "react";
import { PRODUCTS } from "../../products";
import Product from "../../components/products/Product";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SecondProductSection() {
  return (
    <div className="pb-24 2xl:pb-32">
      <div className="flex flex-col sm:flex-row sm:justify-end sm:px-5">
        <Link to={"/lampMini"}>
          <motion.div
            initial={{ y: 30, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
            viewport={{ once: true }}
            className="bg-primaryColor px-0 pt-5 sm:pt-10 lg:px-0"
          >
            <Product
              key={PRODUCTS[4].id}
              secondImage={PRODUCTS[4].frontImg}
              firstImage={PRODUCTS[4].onImg}
              price={PRODUCTS[4].price}
              name={PRODUCTS[4].productName}
              paddingTop="0"
            />
          </motion.div>
        </Link>
        <Link to={"/lampMiniGreen"}>
          <motion.div
            initial={{ y: 30, opacity: 0.5 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.2 },
            }}
            viewport={{ once: true }}
            className="bg-primaryColor px-3 pt-[100px] sm:pt-10"
          >
            <Product
              key={PRODUCTS[6].id}
              firstImage={PRODUCTS[6].onImg}
              secondImage={PRODUCTS[6].frontImg}
              price={PRODUCTS[6].price}
              name={PRODUCTS[6].productName}
              paddingTop="0"
            />
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
