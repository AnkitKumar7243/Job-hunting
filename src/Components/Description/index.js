import React, { useContext } from 'react';
import styles from './description.module.css';
import Badge from '../Badge/index';
import Infos from '../Infos/index';
import Tag from '../Tag/index';
import { GlobalContext } from '../../Contexts/GlobalContext';

const Description = ({ job }) => {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];
  const { openModal } = useContext(GlobalContext);

  const handleJobClick = () => {
    openModal(job);
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>
          <strong className={styles.company}>{job.company}</strong>
          {job.new && <Badge type={"isNew"} />}
          {job.featured && <Badge type={"isFeatured"} />}
        </div>
        <strong
          className={styles.type}
          onClick={handleJobClick}
          title="Click to apply"
        >
          {job.position}
        </strong>
        <Infos job={job} />
      </div>
      <div className={styles.tags}>
        {tags.map(tag => {
          return <Tag key={tag} title={tag} />
        })}
      </div>
    </div>
  )
}

export default Description;