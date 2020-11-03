import React from 'react';
import {Link} from 'react-router-dom';

import PersonalLink from '../components/personal-link'
import profilePic from "../images/profilePic.JPG"
import style from './style/hero.module.css'



const Hero = () => {
    return (
        <div className={style.heroContainer}>
            <div className={style.intro}>
                <h1 className={style.title}>JAEHUN JUNG</h1>
                <h2 className={style.about}>
                I am an undergraduate student at Seoul National University (SNU). 
                I have fortunately been advised by Prof. Kang and Prof. Seo. 
                My research focuses on Natural Language Processing and Machine Learning. 
                I am currently interested in how to leverage external knowledge to benefit 
                machine learning models, especially in low-resource scenarios.
                </h2>

                <div className={style.links}>
                    <PersonalLink
                    imgSrc="github.png" 
                    linkTitle="Download CV"
                    />
                    <PersonalLink 
                        imgSrc="github.png" 
                        linkTitle="Github"
                    />
                    <PersonalLink 
                        imgSrc="github.png" 
                        linkTitle="sharkmir1@snu.ac.kr"
                    />
                </div>
            </div>
            <img src={profilePic} className={style.profilePic}/>   
           
                
        </div>
        
    )

}


export default Hero;