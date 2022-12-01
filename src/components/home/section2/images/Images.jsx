import React from "react";
import styles from "./css/Styles.module.css";
import media from "./css/Media.module.css";
import img from "../../../../img/ginger.png";
import img2 from "../../../../img/nootris.png";
import img3 from "../../../../img/vorus.png";

const Images = () => {
  return (
    <>
      <div className={`${styles.blog1} ${media.blog1}`}>
        <img src={img} alt="img" />
        <p className={`${styles.text1} ${media.text1}`}>
          Содержит <span>имбирь</span>
        </p>
      </div>
      <div className={`${styles.blog2} ${media.blog2}`}>
        <img src={img2} alt="img" />
        <h3 className={`${styles.title} ${media.title}`}>
        + Бесплатная доставка
        </h3>
        <p className={`${styles.text2} ${media.text2}`}>
        Специальная цена
        </p>
      </div>
      <div className={`${styles.blog1} ${media.blog1}`}>
        <img src={img3} alt="img" />
        <p className={`${styles.text1} ${media.text1}`}>
          Нейтрализует <span>вирусы</span>
        </p>
      </div>
    </>
  );
};

export default Images;
