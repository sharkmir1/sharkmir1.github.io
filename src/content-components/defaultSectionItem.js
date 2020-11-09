import React from 'react';

import {formatLabel } from '../util/textParse'
import styles from './style/defaultSectionItem.module.css'

// "id":1, 
// "school": "Seoul National University (SNU)",
// "timeline": "2014 - 2020  Seoul, Korea",
// "desc1": "B.Eng. in Computer Science and Engineering",
// "desc2": "GPA 4.xx/4.3",


const DefaultSectionItem = (props) => {
    return (
        <div className={styles.sectionItemDiv}>
            <h5 className={styles.title}>{formatLabel(props.institution)}</h5>
            <p className={styles.timeline}>{formatLabel(props.timeline)}</p> 
            <p className={styles.elem}>{props.role ? formatLabel(props.role) : null}</p>
            <p className={styles.elem}>{props.desc1 ? formatLabel(props.desc1) : null}</p>
            <p className={styles.elem}>{props.desc2 ? formatLabel(props.desc2) : null}</p>
        </div>
        
    )

}


export default DefaultSectionItem;