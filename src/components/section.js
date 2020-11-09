import React from 'react';

import style from "./style/section.module.css"


const Section = ({sectionTitle, children}) => {
    // console.log(children)
    // console.log(sectionTitle)
    return (
        <div id={sectionTitle} className={style.section}>
            <h3 className={style.sectionTitle}>{sectionTitle}</h3>
            <hr/>
            {children}
        </div>
        
    )

}


export default Section;