import React from 'react';
import Link from '../link';
import styles from './index.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <Link href="#" title="Publications" type="footer"/>                
                <Link href="#" title="Share your thoughts" type="footer"/>                
                <Link href="#" title="Profile" type="footer"/>                
                <Link href="#" title="Login" type="footer"/>                
                <Link href="#" title="Register" type="footer"/>   
            </div>
            <p className={styles.university}>Software University ® 2021</p>
        </footer>
    )
}

export default Footer;