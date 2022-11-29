import React from "react";
import styles from "./css/styles.module.css";
import media from "./css/media.module.css";
import img from '../../../img/MaskGroup.png';

const HeroSection = () => {
  return (
    <section className={`${styles.container} ${media.container} `}>
      <div className="container">
        <div className={`${styles.blog1} ${media.blog1} `}>
          <h2 className={`${styles.title} ${media.title}`}>
            АКТИВИРУЙ ИММУНИТЕТ!
          </h2>
          <p className={`${styles.text1} ${media.text1} `}>
            Всего пять секунд в день помогут укрепить иммунитет
            <br />и повысить защитные силы организма
          </p>
          <h3 className={`${styles.minTitle} ${media.minTitle}`}>
            NOOTRIS ПОМОГАЕТ
          </h3>
          <p className={`${styles.text2} ${media.text2} `}>
            Вашему организму во время пандемии <br />и сезонных простуд
          </p>
        </div>
        <div className={`${styles.blog2} ${media.blog2} `}>
            <img src={img} alt="Nootris" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
