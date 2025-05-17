import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Jobs from './Jobs/index';
import ApplicationModal from './ApplicationModal/index';
import Footer from './Footer/index';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isMobile ? styles.headerMobileBg : styles.headerDesktopBg}`}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>CareerHub</h1>
          <p className={styles.headerSubtitle}>Find Your Dream Job Today</p>
        </div>
      </header>
      <Jobs />
      <ApplicationModal />
      <Footer />
    </>
  );
};

export default Home;