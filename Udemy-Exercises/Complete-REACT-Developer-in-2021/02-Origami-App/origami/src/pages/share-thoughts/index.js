import React, {useState} from 'react';
import SubmitButton from '../../components/button/submit-button';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Origamis from '../../components/origamis';
import getCookie from '../../utils/cookie';
// import getOrigami from '../../utils/origami';

const ShareThoughtsPage = () => {
    const [publication, setPublication] = useState('');
    const [updatedOrigami, setUpdatedOrigami] = useState([])

    const handleSubmit = async () => {
        await fetch('http://localhost:9999/api/origami', {
            method: "POST",
            body: JSON.stringify({
                description: publication
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        })

        setPublication('');
        setUpdatedOrigami([...updatedOrigami, 1]);
    }

    // const handleSubmit = () => {
    //     console.log(publication)
    // }

    return (
        <PageLayout>
            <Title title="Share your thoughts..."/>
            <div className={styles.container}>
                <div>
                    <textarea className={styles.textarea} value={publication} onChange={e => setPublication(e.target.value)} />
                </div>
                <div>
                    <SubmitButton title="Post one" onClick={handleSubmit} />
                </div>
            </div>
            <Origamis length={3} updatedOrigami={updatedOrigami} />
        </PageLayout>
    )
}

export default ShareThoughtsPage;