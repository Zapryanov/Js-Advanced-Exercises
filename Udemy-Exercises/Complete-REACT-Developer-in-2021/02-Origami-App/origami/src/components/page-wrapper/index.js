import React from 'react';
import Header from '../header';
import styles from './index.module.css';
import Aside from '../aside';
import Footer from '../footer';

const PageWrapper = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default PageWrapper;
