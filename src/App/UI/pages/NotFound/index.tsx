import React from 'react';
import Link from "next/link";

import Backdrop from "@/App/UI/components/Backdrop";
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <Backdrop>
      <div className={styles.container}>
        <h1 className={styles.title}>Whoops! No colors to guess here! =[ </h1>
        <Link href={'/'} className={styles.btn}>Go Back!</Link>
      </div>
    </Backdrop>
  );
};

export default NotFound;
