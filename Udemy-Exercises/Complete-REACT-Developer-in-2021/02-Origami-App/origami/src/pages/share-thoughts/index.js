import React from 'react';
import SubmitButton from '../../components/button/submit-button';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';

const ShareThoughtsPage = () => {
    return (
        <PageLayout>
            <Title title="Share your thoughts..."/>
            <div className={styles.container}>
                <div>
                    <textarea className={styles.textarea}>Publication...</textarea>
                </div>
                <div>
                    <SubmitButton title="Post" />
                </div>
            </div>
        </PageLayout>
    )
}

export default ShareThoughtsPage;