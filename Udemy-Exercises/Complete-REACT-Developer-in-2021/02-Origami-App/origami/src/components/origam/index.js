import React from 'react';
import styles from './index.module.css';
import image from '../../images/blue-origami-bird.png';

const Origam = ({ description, author, index }) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="blue-origami-bird"/>
            <p className={styles.description}>
                <span>{index + 1}. </span>
                {description}
            </p>
            <div>
                <small>Author: </small>
                <span className={styles.user}>{author.username}</span>
            </div>
        </div>
    )
}

export default Origam;