import React from 'react';
import {Link} from 'react-router-dom';


// "id":1, 
// "school": "Seoul National University (SNU)",
// "timeline": "2014 - 2020  Seoul, Korea",
// "desc1": "B.Eng. in Computer Science and Engineering",
// "desc2": "GPA 4.xx/4.3",


// const images = require.context('../images', true);
const PublicationsSectionItem = (props) => {
    return (
        <div>
            <img src={require(`${props.imgSrc}`)} style={{ width: '35px'}}/>
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