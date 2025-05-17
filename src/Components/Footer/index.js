import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>CareerHub</h3>
          <p className={styles.footerDescription}>
            Find your dream job with CareerHub. We connect talented professionals with top companies worldwide.
          </p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>For Job Seekers</h3>
          <ul className={styles.footerLinks}>
            <li><a href="#">Browse Jobs</a></li>
            <li><a href="#">Career Advice</a></li>
            <li><a href="#">Resume Builder</a></li>
            <li><a href="#">Salary Calculator</a></li>
            <li><a href="#">Job Alerts</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>For Employers</h3>
          <ul className={styles.footerLinks}>
            <li><a href="#">Post a Job</a></li>
            <li><a href="#">Talent Search</a></li>
            <li><a href="#">Pricing Plans</a></li>
            <li><a href="#">Recruitment Solutions</a></li>
            <li><a href="#">Employer Resources</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} CareerHub. All rights reserved.</p>
        <div className={styles.footerBottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
