import React, { useContext, useMemo } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './jobs.module.css';
import JobCategory from '../JobCategory/index';
import Filter from '../Filter/index';

const Jobs = () => {
  const { jobs, filter } = useContext(GlobalContext);

  // Group jobs by role (Frontend, Backend, Fullstack, etc.)
  const groupedJobs = useMemo(() => {
    const grouped = {};

    // Use the current jobs array (which is already filtered if filter is active)
    jobs.forEach(job => {
      if (!grouped[job.role]) {
        grouped[job.role] = [];
      }
      grouped[job.role].push(job);
    });

    // Sort categories alphabetically
    return Object.keys(grouped)
      .sort()
      .reduce((acc, key) => {
        acc[key] = grouped[key];
        return acc;
      }, {});
  }, [jobs]); // Only depend on jobs, which already reflects filter changes

  return (
    <div className={`${styles.container} ${filter.length === 0 && styles.pddTop}`}>
      {filter.length !== 0 && <Filter />}

      <div className={styles.categoriesContainer}>
        {Object.entries(groupedJobs).map(([category, categoryJobs]) => (
          <JobCategory
            key={category}
            category={category}
            jobs={categoryJobs}
          />
        ))}
      </div>

      {Object.keys(groupedJobs).length === 0 && (
        <div className={styles.noJobs}>
          <i className="fas fa-search"></i>
          <h3>No jobs found</h3>
          <p>Try adjusting your filters or search criteria</p>
        </div>
      )}
    </div>
  )
}

export default Jobs;