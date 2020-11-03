import React from 'react';
import {Link} from 'react-router-dom';


// "id":1, 
// "school": "Seoul National University (SNU)",
// "timeline": "2014 - 2020  Seoul, Korea",
// "desc1": "B.Eng. in Computer Science and Engineering",
// "desc2": "GPA 4.xx/4.3",


const DefaultSectionItem = (props) => {
    return (
        <div>
            <h5>{props.institution}</h5>
            <p>{props.timeline}</p>
            <p>{props.desc1}</p>
            <p>{props.desc2 ? props.desc2 : null}</p>
        </div>
        
    )

}


export default DefaultSectionItem;