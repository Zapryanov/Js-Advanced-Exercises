import React, { useContext } from 'react';
import PageLayout from '../../components/page-layout';
// import styles from './index.module.css';
import Title from '../../components/title';
import Origamis from '../../components/origamis';
import UserContext from '../../Context';


const HomePage = () => {
    
    const context = useContext(UserContext);
    console.log(context)
    return (
        <PageLayout>
            <Title title="Publications" />
            <Origamis />
        </PageLayout>
    )
}

// class HomePage extends Component {
//     static contextType = UserContext;

//     render() {
//         console.log(this.context)
//         return (
//             <PageLayout>
//                 <Title title="Publications" />
//                 <Origamis />
//             </PageLayout>
//         )
//     }
// }

export default HomePage;
