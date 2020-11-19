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
                I am an undergraduate in Computer Science at Seoul National University (SNU). 
                I am fortunate to be advised by Prof. U Kang, and Prof. Jinwook Seo. 
                My research interests lies in Information Extraction / Retrieval and Natural Language Processing. 
                I am currently interested in extracting structured knowledge from language, 
                and leveraging the knowledge for text generation.
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