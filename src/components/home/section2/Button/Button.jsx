import React from 'react';
import styles from "./css/Styles.module.css";
import media from "./css/Media.module.css";

const Button = () => {
  return (
    <>
    <button type='button' className={`${styles.btn} ${media.btn}`}>
    Оформить заказ!
    </button>
    </>
  )
}

export default Button