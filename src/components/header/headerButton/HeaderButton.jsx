import React,{useState} from 'react';
import styles from './css/HeaderButton.module.css';
import media from './css/Media.module.css';
import { Link } from 'react-router-dom';

import {BsBasket3} from 'react-icons/bs';

const HeaderButton = () => {
    const [count, setCount] = useState(0);
  return (
    <div className={`${styles.icon} ${media.icon}`}>
        <Link to = '#'>
            <BsBasket3/>
        </Link>
        <div className={`${styles.cart} ${media.cart}`}>
              {count}
        </div>
    </div>
  )
}

export default HeaderButton