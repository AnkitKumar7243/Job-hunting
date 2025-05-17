import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../Contexts/GlobalContext';
import styles from './applicationModal.module.css';

const ApplicationModal = () => {
  const { selectedJob, isModalOpen, closeModal } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  if (!isModalOpen || !selectedJob) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would send this data to a server
      console.log('Application submitted:', { job: selectedJob, applicant: formData });
      setSubmitted(true);
      
      // Reset form after submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        coverLetter: '',
      });
      
      // Close modal after 3 seconds
      setTimeout(() => {
        closeModal();
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={closeModal}>×</button>
        
        {!submitted ? (
          <>
            <div className={styles.modalHeader}>
              <img src={selectedJob.logo} alt={selectedJob.company} className={styles.companyLogo} />
              <div>
                <h2>Apply for {selectedJob.position}</h2>
                <p className={styles.companyName}>{selectedJob.company}</p>
                <p className={styles.jobDetails}>
                  {selectedJob.location} • {selectedJob.contract}
                </p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className={styles.applicationForm}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? styles.inputError : ''}
                />
                {errors.fullName && <span className={styles.errorMessage}>{errors.fullName}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? styles.inputError : ''}
                />
                {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? styles.inputError : ''}
                />
                {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="experience">Years of Experience</label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="coverLetter">Cover Letter</label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us why you're a good fit for this position..."
                ></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>
                Submit Application
              </button>
            </form>
          </>
        ) : (
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✓</div>
            <h2>Application Submitted!</h2>
            <p>Thank you for applying to {selectedJob.position} at {selectedJob.company}.</p>
            <p>We will contact you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationModal;
