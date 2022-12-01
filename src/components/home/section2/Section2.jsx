import React from "react";
import Title from "./title/Title";
import Price from "./price/Price";
import Images from "./images/Images";
import Button from "./Button/Button";

const Section2 = () => {
  return (
    <section className="containerFluid">
      <Title />
      <Price />
      <div className="container">
        <Images />
      </div>
      <Button />
    </section>
  );
};

export default Section2;
