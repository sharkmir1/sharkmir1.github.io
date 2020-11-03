import React from 'react';
import {Link} from 'react-router-dom';

import style from "./style/section.module.css"


const Section = ({sectionTitle, children}) => {
    // console.log(children)
    return (
        <div className={style.section}>
            <h3>{sectionTitle}</h3>
            <hr/>
            {children}
        </div>
        
    )

}


export default Section;