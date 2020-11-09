import React from 'react';

import style from './style/footer.module.css'

const Footer = () => {
    return (
        <div className={style.footer}>
            <p className={style.footerName}>JAEHUN JUNG </p>
            <p className={style.year}>© {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer