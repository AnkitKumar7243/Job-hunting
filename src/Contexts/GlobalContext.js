import React, { useState, useEffect } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [data, setData] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch data from the public folder
    fetch('./api/data.json')
      .then(response => response.json())
      .then(json => {
        setJobs(json);
        setData(json);
      })
      .catch(error => {
        console.error('Error fetching job data:', error);
        // Fallback to empty array if fetch fails
        setJobs([]);
        setData([]);
      });
  }, []);

  useEffect(() => {
    if (filter.length !== 0) {
      setJobs(data);
      // Apply filters
      filter.forEach(f => {
        setJobs(oldArray => (
          oldArray.filter(value => value.role === f || value.level === f || value.tools.includes(f) || value.languages.includes(f))
        ))
      });
    } else {
      setJobs(data);
    }
  }, [filter, data]);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  return (
    <GlobalContext.Provider value={{
      jobs,
      filter,
      setFilter,
      selectedJob,
      isModalOpen,
      openModal,
      closeModal
    }}>
      {children}
    </GlobalContext.Provider>
  );
};