import React from 'react';
import {Link} from 'react-router-dom';

import Header from './header'
import style from './style/layout.module.css'

const Layout = ({children}) => {
    return (
        <div className={style.outmostBoundary} >
            <Header/>
            {children}
        </div>
        
    )

}


export default Layout;