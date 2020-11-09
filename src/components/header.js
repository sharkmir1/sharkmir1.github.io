import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

import style from './style/header.module.css'

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavVisible: false,
            windowSize: window.innerWidth
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
      }
    
      componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
      }

    toggleNav() {
        console.log(this.state.isNavVisible)
        this.setState({ isNavVisible: !this.state.isNavVisible})
    }

    handleResize = e => {
        const windowSize = window.innerWidth;
        this.setState(prevState => {
          return {
            windowSize
          };
        });
      };

    render() {
        return (
            <div className={style.nav}>
                <div className={style.logo}>/JH/</div>
    
                {
                    (this.state.isNavVisible && this.state.windowSize < 970) 
                    || (this.state.windowSize > 970)
                    ?  (
                    <ul className={style.links}>
                        <li onClick={this.toggleNav}>
                        <HashLink smooth to="/#EDUCATION">EDUCATION</HashLink>
                        </li>
                        <li onClick={this.toggleNav}>
                        <HashLink smooth to="/#PUBLICATIONS">PUBLICATIONS</HashLink>
                        </li>
                        <li onClick={this.toggleNav}>
                        <HashLink smooth to="/#RESEARCH">RESEARCH</HashLink>
                        </li>
                        <li onClick={this.toggleNav}>
                        <HashLink smooth to="/#WORK EXPERIENCE">WORK</HashLink>
                        </li>
                        <li onClick={this.toggleNav}>
                        <HashLink smooth to="/#HONORS">HONORS</HashLink>
                        </li>
                    </ul>
                    )                   
                    :null
                    
                }
                
    
                <button onClick={this.toggleNav} className={style.burger}>
                    <div className={style.line1}></div>
                    <div className={style.line2}></div>
                    <div className={style.line3}></div>
                </button>
            </div>
            
        )
    }
}

// const Header = () => {
//     const { width } = useViewport();
//     const breakpoint = 970;
    
//     componentDidUpdate
//     return (
//         <div className={style.nav}>
//             <div className={style.logo}>/JH/</div>

//             <ul className={style.links}>
//                 <li>
//                 <HashLink smooth to="/#EDUCATION">EDUCATION</HashLink>
//                 </li>
//                 <li>
//                 <HashLink smooth to="/#PUBLICATIONS">PUBLICATIONS</HashLink>
//                 </li>
//                 <li>
//                 <HashLink smooth to="/#RESEARCH">RESEARCH</HashLink>
//                 </li>
//                 <li>
//                 <HashLink smooth to="/#WORK">WORK</HashLink>
//                 </li>
//                 <li>
//                 <HashLink smooth to="/#HONORS">HONORS</HashLink>
//                 </li>
//             </ul>

//             <button onClick={toggleNav} className={style.burger}>
//                 <div className={style.line1}></div>
//                 <div className={style.line2}></div>
//                 <div className={style.line3}></div>
//             </button>
//         </div>
        
//     )

// }


export default Header;  
