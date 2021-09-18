import React from 'react';
import Link from '../link';
import styles from './index.module.css';
import logo from '../../images/white-origami-bird.png';

const Header = () => {
    return (
        <header className={styles.navigation}>
            <img className={styles.logo} src={logo} alt="logo"/>
            <Link href="#" title="Publications" type="header"/>                
            <Link href="#" title="Share your thoughts" type="header"/>                
            <Link href="#" title="Profile" type="header"/>                
            <Link href="#" title="Login" type="header"/>                
            <Link href="#" title="Register" type="header"/>                
        </header>
    )
}

export default Header;