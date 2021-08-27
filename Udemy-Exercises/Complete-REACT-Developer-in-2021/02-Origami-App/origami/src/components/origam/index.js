import React from 'react';
import styles from './index.module.css';

const Origam = ({ description, author }) => {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                {description}
            </div>
            <span className={styles.user}>{author.username}</span>
        </div>
    )
}

export default Origam;