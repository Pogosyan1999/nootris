import React from 'react';
import styles from "./css/Styles.module.css";
import media from "./css/Media.module.css";

const Price = () => {
  return (
    <div className= {`${styles.container} ${media.container}`}>
        <p className={`${styles.price1} ${media.price1}`}>
        750₽
        </p>
        <p className={`${styles.price2} ${media.price2}`}>
        690₽
        </p>
    </div>
  )
}

export default Price