import React, {useEffect, useRef, useState} from "react";
import './Navbar.scss'
import {useHistory} from "react-router";
import {navigation,webPages} from "../pure_functions/PathNavigation";


const Navbar = React.memo((props) => {
 
   
    return (
        <div className='nav-bar-container'>
           
            <div className='nav-header'>{<div className={`nav-options`}>
                <a href={webPages.categoryList} className="nav-opt float-opt">Categories</a>
                <a href={webPages.addEditCategory} className="nav-opt float-opt">add category</a>
            </div>}
            </div>
        </div>
    );
})

export default Navbar;
