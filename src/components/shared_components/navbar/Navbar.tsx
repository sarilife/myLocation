import React, {useEffect, useRef, useState} from "react";
import './Navbar.scss'
import {webPages} from "../pure_functions/PathNavigation";


const Navbar = React.memo((props) => {
 
    const isBold = (name: string) => {
        
        return  window.location.pathname === name ? "selectTab" : ""
    }
   
    return (
        <div className='nav-bar-container'>
           
            <div className='nav-header'>{<div className={`nav-options`}>
                <a href={webPages.categoryList} className={`nav-opt float-opt ${isBold(webPages.categoryList)}`}>Categories</a>
                <a href={webPages.addEditCategory} className={`nav-opt float-opt ${isBold(webPages.addEditCategory)}`}>add category</a>
            </div>}
            </div>
        </div>
    );
})

export default Navbar;
