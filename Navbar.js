import React ,{useState} from "react"
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb'
import "./navbar.scss"

import "./navbar.css";

const Navbar = () => {
const [active,setActive]=useState('navBar')
//Function to toggle navBar

const showNav=()=>{
setActive('navBar ')


};
const removeNavbar=()=>{
  setActive('navBar ')
};




  return (
    <div>
    <section className="navBarSection">
    <header className="header flex">
    <div className="logoDiv">
    <a href="#" className="logo flex">
    <h1>  <MdOutlineTravelExplore 
                   className="icon"/>
  Travel</h1>
    
        </a>
    </div>

<div className={active}>
<ul className="navLists flex">

<li className="navItem">
<a href="#" className="navLink">Home</a>
</li> 
<br></br>

<li className="navItem">
<a href="#Packege" className="navLink">Packege</a>
</li>

<br></br>
<li className="navItem">
<a href="#shop" className="navLink">Shop</a>
</li>

<br></br>
<li className="navItem">
<a href="#pages" className="navLink">Pages</a>
</li>
<br></br>


<br></br>
<li className="navItem">
<a href="#news" className="navLink">News</a>
</li>
<br></br>



<br></br>
<li className="navItem">
<a href="#contact" className="navLink">Contact</a>
</li>
<br></br>

<button className="btn">
<a href="#" className="NavLink">Book Now</a>
</button>


<div onClick={removeNavbar} className="closeNavbar">
<AiFillCloseCircle className="icon"/>
</div>

<div onClick={showNav} className="toggleNavbar">
<TbGridDots className="icon"/>

</div>




</ul>
</div>
    </header>

    </section>  
    </div>
  )
}

export default Navbar;
