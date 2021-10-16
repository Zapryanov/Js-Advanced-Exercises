import React from 'react';
import styles from './submit-button.module.css'

const SubmitButton = ({ title, onClick }) => {
    return (
        <button className={styles.submit} onClick={onClick} type="submit">{title}</button>
    )
}

export default SubmitButton;