import React from 'react';
import {Link} from 'react-router-dom';

import imgpath from '../images/tgap.png'


// "id":1, 
// "school": "Seoul National University (SNU)",
// "timeline": "2014 - 2020  Seoul, Korea",
// "desc1": "B.Eng. in Computer Science and Engineering",
// "desc2": "GPA 4.xx/4.3",


// const images = require.context('../images', true);
const PublicationsSectionItem = (props) => {
    console.log("imgpath: ", imgpath)
    console.log("imgsrc: ", require(`../images/${props.imgSrc}`).default)
    return (
        <div>
            <img src={require(`../images/${props.imgSrc}`).default} style={{ width: '105px'}}/>
            {/* require("" + props.imgSrc) */}
            <h5>{props.title}</h5>
            <p>{props.authors}</p>
            <p>{props.description}</p>
            <p>{props.conference ? props.desc2 : null}</p>
            <p>{props.paperLink}</p>
            <p>{props.talkLink}</p>
            <p>{props.projectLink}</p>
        </div>
        
    )

}


export default PublicationsSectionItem;