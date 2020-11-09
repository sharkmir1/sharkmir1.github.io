import React from 'react';

import styles from './style/personalLink.module.css'

const PersonalLink = (props) => {
    return (
        <div style={{ marginRight: '22px'}}>
            <img src={`../images/${props.imgSrc}`} className={styles.icon}/>
            {props.href 
            ? <a href={props.href} className={styles.link} target="_blank">{props.linkTitle}</a> 
            : <span>{props.linkTitle}</span>}
        </div>
        
    )

}


export default PersonalLink;