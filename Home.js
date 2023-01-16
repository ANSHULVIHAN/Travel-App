import React,{useEffect} from 'react';
import './home.css';
import imgp from '../../assets/img(1).jpg'
import './home.scss';
import {GrLocation} from 'react-icons/gr';
//import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa';
import {BsListTask} from 'react-icons/bs'
import { TbApps } from 'react-icons/tb';

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
useEffect(()=>{

  Aos.init({duration:2000})
},[])




  return (
    <section className='home'>
    
    <div className='overlay' > </div>
   <image src={imgp} type="img(1)/jpg"></image>
    
    <div className="homeContent container">
    <div className='textDiv'>
    <span data-aos="fade-up" className='smalltext'>
    <h1>Our Packges</h1> 
    </span>
    <h1 data-aos="fade-up" className='homeTitle'>
    Search your holiday</h1>
    </div>
    
<div data-aos="fade-up" className='cardDiv grid'>
<div className='destinationInput'>
<label htmlFor='city'>Search your Destination</label>
<div className='input flex'>
<input type="text" placeholder='Enter your Destination here...'></input>

<GrLocation className="icon" />
</div>
</div>

<div className='dateinput'>
<lable htmlFor="date">Select your Date:</lable>
<div className='input flex'>
<input type="date" ></input>
</div>
</div>






<div className='priceInput'>
<div className='lable_total flex'>
<label htmlFor='price'>Max Price:$5000</label>

</div>
<div className='input flex'>
<input type="range" max="5000" min="1000" count="range"></input>
</div>

</div>


<div  >

</div>



<span >Connection</span>
</div>

<div data-aos="fade-up" className=' homeFooterIcons flex'>
<div className='righticons'>

</div>
<div className='righticons'>
<FiFacebook  className="icon"/>
<AiOutlineInstagram className='icon' />
<FaTripadvisor className='icon'/>


</div>
<div className='lefticons'>
<BsListTask className="icon" />
<TbApps className="icon" />
</div>

</div>


</div>


   
    
   
      
    </section>
  )
}

export default Home;

