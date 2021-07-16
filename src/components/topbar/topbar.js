import React from 'react';
//css
import styles from "./topbar.module.css";


const top = ({username}) => {
    return ( <div className={styles.top}>
        <h2>Topbar {username}</h2>
    </div> );
}
 
export default top;