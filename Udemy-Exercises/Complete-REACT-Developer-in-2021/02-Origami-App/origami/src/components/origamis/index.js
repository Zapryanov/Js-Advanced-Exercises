import React, { useState, useEffect, useCallback } from 'react';
import styles from './index.module.css';
import Origam from '../origam';

const Origamis = (props) => {
    const [origamis, setOrigamis] = useState([]);

    const getOrigamis = useCallback(async () => {
        const promise = await fetch(`http://localhost:9999/api/origami?length=${props.length}`);
        const origamis = await promise.json();

        setOrigamis(origamis)
    }, [props.length])

    const renderOrigamis = () => {

        return origamis.map((origam, i) => {
            return(
                <Origam  key={origam._id} index={i} {...origam}/>
            )
        })
    }

    useEffect(() => {
        getOrigamis()
    }, [getOrigamis])

    return (
        <div className={styles["origamis-wrapper"]}>
            {renderOrigamis()}
        </div>
    )
}

// class Origamis extends Component {

//     getOrigamis = async () => {
//         const { length } = this.props;
//         const promise = await fetch(`http://localhost:9999/api/origami?length=${length}`);
//         const origamis = await promise.json();

//         this.setState({
//             origamis
//         })
//     }

//     renderOrigamis() {
//         const { origamis } = this.state;

//         return origamis.map((origam, i) => {
//             return(
//                 <Origam  key={origam._id} index={i} {...origam}/>
//             )
//         })
//     }

//     componentDidMount() {
//         this.getOrigamis();
//     }

//     render() {
//         return (
//             <div className={styles["origamis-wrapper"]}>
//                 {this.renderOrigamis()}
//             </div>
//         )
//     }
// }

export default Origamis;
