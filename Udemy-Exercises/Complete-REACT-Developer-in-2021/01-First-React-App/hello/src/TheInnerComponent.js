import React from 'react';
import AuthContext from './context';
import styles from './TheInnerComponent.module.css';

class TheInnerComponent extends React.Component {

    // static contextType = AuthContext;

    render() {
        return (
            <div className={styles.color}>
                This is The Most Inner Component...!!! - Made from - {this.props.name} ({this.props.age} years old from {this.props.address}) - {this.context.loggedIn ? "Auth" : "No Auth"}
            </div>
        )
    }
}

TheInnerComponent.contextType = AuthContext

export default TheInnerComponent;