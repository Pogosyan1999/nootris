import React from 'react';
import styles from './css/Logo.module.css';
import media from './css/Media.module.css';
import { Link } from 'react-router-dom';
import img from '../../../img/Logo.png';


const Logo = () => {
  return (
    <div className={`${styles.logo} ${media.logo}`}>
        <Link to = '/'>
           <img src={img} alt="Logo" />
        </Link>
    </div>
  )
}

export default Logo