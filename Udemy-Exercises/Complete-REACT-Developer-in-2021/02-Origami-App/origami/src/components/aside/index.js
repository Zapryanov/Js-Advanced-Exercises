import React from 'react';
import Link from '../link';
import styles from './index.module.css';

const Aside = () => {
    return (
        <aside className={styles.container}>
            <Link href="#" title="Publications" type="aside"/>                
            <Link href="#" title="Share your thoughts" type="aside"/>                
            <Link href="#" title="Profile" type="aside"/>                
            <Link href="#" title="Login" type="aside"/>                
            <Link href="#" title="Register" type="aside"/>     
        </aside>
    )
}

export default Aside;