import React from 'react';
import styles from './FeedPhotosItems.module.css';

const FeedPhotosItems = ({ photo }) => {
  return (
    <li className={styles.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItems;
