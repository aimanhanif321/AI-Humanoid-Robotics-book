import React from 'react';

import styles from './LikeButton.module.css';

function LikeButton() {
  return (
    <div className={styles.likeButtonContainer}>
      <button className={styles.likeButton}>👍 Like this page</button>
    </div>
  );
}

export default LikeButton;
