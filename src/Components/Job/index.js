import React, { useContext } from 'react';
import styles from './job.module.css';
import Description from '../Description/index';
import { GlobalContext } from '../../Contexts/GlobalContext';

const Job = ({ job }) => {
  const { openModal } = useContext(GlobalContext);

  const handleApply = () => {
    openModal(job);
  };

  return (
    <div className={`${styles.job} ${job.featured && styles.jobFeatured}`}>
      <div className={styles.jobInfos}>
        <img src={job.logo} alt={job.company} />
        <Description job={job} />
        <button
          className={styles.applyButton}
          onClick={handleApply}
        >
          Apply Now
        </button>
      </div>
    </div>
  )
}

export default Job;