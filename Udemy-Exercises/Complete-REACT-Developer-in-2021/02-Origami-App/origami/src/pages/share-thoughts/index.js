import React, {useState} from 'react';
import SubmitButton from '../../components/button/submit-button';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Origamis from '../../components/origamis';

const ShareThoughtsPage = () => {
    const [publication, setPublication] = useState('');

    const handleSubmit = async () => {
        const promise = await fetch('http://localhost:9999/api/origami', {
            method: "POST",
            body: JSON.stringify({
                description: publication
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await promise.json();

        console.log(data);
    }

    return (
        <PageLayout>
            <Title title="Share your thoughts..."/>
            <div className={styles.container}>
                <div>
                    <textarea className={styles.textarea} value={publication} onChange={e => setPublication(e.target.value)} />
                </div>
                <div>
                    <SubmitButton title="Post" onClick={handleSubmit} />
                </div>
            </div>
            <Origamis length={3}/>
        </PageLayout>
    )
}

export default ShareThoughtsPage;