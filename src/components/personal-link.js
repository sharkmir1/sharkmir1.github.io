import React from 'react';
import {Link} from 'react-router-dom';


const PersonalLink = (props) => {
    return (
        <div style={{ marginRight: '22px'}}>
            <img src={`../images/${props.imgSrc}`} />
            {props.linkTitle}
        </div>
        
    )

}


export default PersonalLink;