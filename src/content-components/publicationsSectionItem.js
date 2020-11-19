import React from 'react';

import {formatLabel } from '../util/textParse'
import imgpath from '../images/tgap.png'
import styles from './style/publicationSectionItem.module.css'


// "id":1, 
// "school": "Seoul National University (SNU)",
// "timeline": "2014 - 2020  Seoul, Korea",
// "desc1": "B.Eng. in Computer Science and Engineering",
// "desc2": "GPA 4.xx/4.3",


// const images = require.context('../images', true);
const PublicationsSectionItem = (props) => {
    // console.log("imgpath: ", imgpath)
    // console.log("imgsrc: ", require(`../images/${props.imgSrc}`).default)
    return (
        <div className={styles.sectionItemDiv}>
            {/* <div> */}
                <img className={styles.thumbnail} src={require(`../images/${props.imgSrc}`).default}/>
                
            {/* </div> */}
            
            {/* require("" + props.imgSrc) */}
            <div className={styles.content}>
                <h5 className={styles.title}>{formatLabel(props.title)}</h5>
                
                <div className={styles.authorshipDiv}>
                    <p className={styles.elem}>{formatLabel(props.authors)}</p>
                    &nbsp;&nbsp;&nbsp;<p className={styles.description}>{props.description ? formatLabel(props.description) : null}</p>
                </div>
                {/* <div className={styles.conferenceDiv}> */}
                    <p className={styles.conference}>{props.conference ? formatLabel(props.conference) : null}</p>
                    <div className={ props.paperLink || props.talkLink || props.projectLink ? styles.links : styles.linksNone}>
                        <p className={styles.link}>{props.paperLink ? formatLabel(props.paperLink) : null}</p>
                        <p className={styles.link}>{props.talkLink ? formatLabel(props.talkLink) : null}</p>
                        <p className={styles.link}>{props.projectLink ? formatLabel(props.projectLink) : null}</p>
                    </div>
                {/* </div> */}
                

                
            </div>
        </div>
        
    )

}


export default PublicationsSectionItem;