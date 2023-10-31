import React from "react";
import Product from "../../components/products/Product";
import chairSide from "../../assets/Luminosité Louis/chair/chairSide.webp";
import chairFront from "../../assets/Luminosité Louis/chair/chairFront.webp";

export default function FirstProductsSection() {
  return (
    <div>
      <div className="px-3 pt-5">
        <Product imgFront={chairSide} imgBack={chairFront} />
      </div>
    </div>
  );
}
