import Product from "../../components/products/Product";
import { motion } from "framer-motion";

import { PRODUCTS } from "../../products";
import { Link } from "react-router-dom";

export default function FirstProductsSection() {
  return (
    <div className="pb-24 2xl:pb-32">
      <div className="flex flex-col sm:flex-row sm:justify-end sm:px-5">
        <motion.div
          initial={{ y: 30, opacity: 0.5 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.4 } }}
          viewport={{ once: true }}
          className="bg-primaryColor px-0 pt-5 sm:pt-10 lg:px-0"
        >
          <Link to={"/chair"}>
            <Product
              key={PRODUCTS[0].id}
              firstImage={PRODUCTS[0].frontImg}
              secondImage={PRODUCTS[0].sideImg}
              price={PRODUCTS[0].price}
              name={PRODUCTS[0].productName}
              paddingTop="0"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.2 },
          }}
          viewport={{ once: true }}
          className="bg-primaryColor px-3 pt-[100px] sm:pt-10"
        >
          <Link to={"/lampWhite"}>
            <Product
              key={PRODUCTS[1].id}
              firstImage={PRODUCTS[1].onImg}
              secondImage={PRODUCTS[1].frontImg}
              price={PRODUCTS[1].price}
              name={PRODUCTS[1].productName}
              paddingTop="0"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
