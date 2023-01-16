import React, { useEffect } from 'react'
import './footer.css';
import imgSrc from '../../assets/img(14).jpg';
import {FiChevronRight, FiSend} from 'react-icons/fi';
import './footer.scss';
import {MdOutlineTravelExplore} from 'react-icons/md';
import {AiOutlineTwitter } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import {FaTripadvisor} from 'react-icons/fa'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

useEffect(()=>{
  Aos.init({duration:2000})
},[]);

  return (
    <section className='footer'>
    <div className='imgDiv'>
    
    <img src={imgSrc} type="img" />
    </div>
<div className='secContent container'>
<div className='contactDiv flex'>
<div data-aos="fade-up" className='text'>
<small>KEEP IN TOUCH</small>
<h2>Travel with us</h2>

</div>

<div className='inputDiv flex' >
<input data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
<button data-aos="fade-up" className='btn flex' type='submit'>
Send<FiSend className="icon" />
</button>
</div>
</div>


<div className='footerCard flex'>
<div className='footerIntro flex'>
<div className='logoDiv'>
<a href='#' className='logo flex'>
<MdOutlineTravelExplore  className="icon"/>
Travel.
</a>

</div>

<div data-aos="fade-up" className='footerParagraph'>
hgdgdgdfdvbgdgdhdtegdshddbdwjhdjsjsjdnsjdhddhbsdsdsjdjdnjnsjnsjnsjssdnsd


</div>

<div data-aos="fade-up"   className='footerSocials flex'>
<AiOutlineTwitter className='icon' />
<AiFillInstagram  className='icon'/>
<AiFillYoutube className='icon'/>
<FaTripadvisor className='icon'/>
</div>
</div>
<div data-aos="fade-up"  className='footerLinks grid'>
<div className='LinkGroup'>
<span className='groupTitle'>
OUR AGENCY
</span>

<li className='footerList flex'>
<FiChevronRight  className='icon'/>
Insurence
</li>


<li className='footerList flex'>
<FiChevronRight  className='icon'/>
AGENCY
</li>


<li className='footerList flex'>
<FiChevronRight  className='icon'/>
Tourism
</li>


<li className='footerList flex'>
<FiChevronRight  className='icon'/>
Payment
</li>


<span className='groupTitle'>
Partners
</span>


<li className='footerList flex'>
<FiChevronRight  className='icon'/>
trivago
</li>


<li className='footerList flex'>
<FiChevronRight  className='icon'/>
Bookings
</li>


<li className='footerList flex'>
<FiChevronRight  className='icon'/>
CarRide
</li>

<li className='footerList flex'>
<FiChevronRight  className='icon'/>
HostelWorld
</li>


<span className='groupTitle'>
Last Minute
</span>


<li className='footerList flex'>
<FiChevronRight  className='icon'/>
Australia
</li>

<li className='footerList flex'>
<FiChevronRight  className='icon'/>
Hungry
</li>

<li className='footerList flex'>
<FiChevronRight  className='icon'/>
india
</li>

<li className='footerList flex'>
<FiChevronRight  className='icon'/>
America
</li>


</div>


<div data-aos="fade-up"   className='footerDiv flex'>
<small>BEST TRAVEL WEBSITE</small>
<small>COPYRIGHTS RESERVED ANSHUL CHAUDHARY : 2023</small>
</div>


</div>

</div>
</div> 
    </section>
  )
}

export default Footer;
