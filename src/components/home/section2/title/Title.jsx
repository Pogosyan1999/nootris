import React from "react";
import styles from "./css/Styles.module.css";
import media from "./css/Media.module.css";

const Title = () => {
  return (
    <>
      <h2 className={`${styles.title} ${media.title}`}>
        ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА{" "}
        <span className={`${styles.yellow1} ${media.yellow1}`}>
          СО СКИДКОЙ -15% ПЕРВЫМ!
        </span>
      </h2>
    </>
  );
};

export default Title;
