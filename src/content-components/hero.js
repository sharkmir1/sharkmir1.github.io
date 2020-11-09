import React from 'react';

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
                    imgSrc="download.png" 
                    linkTitle="Download CV"
                    href="pdf/JaehunJung_CV.pdf"
                    />
                    <PersonalLink 
                        imgSrc="github.svg" 
                        linkTitle="/sharkmir1"
                        href="https://github.com/sharkmir1"
                    />
                    <PersonalLink 
                        imgSrc="email.png" 
                        linkTitle="sharkmir1@snu.ac.kr"
                    />

                </div>
            </div>
            <img src={profilePic} className={style.profilePic}/>   
           
                
        </div>
        
    )

}


export default Hero;