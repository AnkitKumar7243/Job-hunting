import React, { useState } from 'react';
import styles from './jobCategory.module.css';
import Job from '../Job/index';

const JobCategory = ({ category, jobs }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Count jobs with "new" flag
  const newJobsCount = jobs.filter(job => job.new).length;

  return (
    <div className={styles.categoryContainer}>
      <div 
        className={styles.categoryHeader} 
        onClick={toggleExpand}
      >
        <div className={styles.categoryInfo}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <span className={styles.jobCount}>{jobs.length} jobs available</span>
          {newJobsCount > 0 && (
            <span className={styles.newBadge}>{newJobsCount} new</span>
          )}
        </div>
        <button 
          className={`${styles.expandButton} ${isExpanded ? styles.expanded : ''}`}
          aria-label={isExpanded ? "Collapse category" : "Expand category"}
        >
          <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
        </button>
      </div>
      
      {isExpanded && (
        <div className={styles.jobsList}>
          {jobs.map(job => (
            <Job key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobCategory;
