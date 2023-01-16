import React, { useEffect } from 'react'
import './main.css';
import './main.scss';
import img from '../../assets/img(1).jpg';
import img1 from '../../assets/img(2).jpg';
import img2 from '../../assets/img(3).jpg';
import img3 from '../../assets/img(4).jpg';
import img4 from '../../assets/img(5).jpg';
import img5 from '../../assets/img(6).jpg';
import img6 from '../../assets/img(7).jpg';
import img7 from '../../assets/img(8).jpg';
import img8 from '../../assets/img(9).jpg';
import img9 from '../../assets/img(10).jpg';
import img10 from '../../assets/img(11).jpg';
import {HiOutlineClipboard, HiOutlineLocationMarker} from 'react-icons/hi'
import Aos from 'aos';
import 'aos/dist/aos.css'


const Data=[
{id:1,
  imgSrc:img,
  destTitle:'Bora Bora',
  location: 'New Zealand',
  grade:'CULTURAL RELAX',
  fees: '$700$',
  description:'here we do romance and perfect dance at this destination'

},

{id:2,
  imgSrc:img1,
  destTitle:'New Delhi',
  location: 'India',
  grade:'CULTURAL RELAX',
  fees: '$700$',
  description:'here we do romance and perfect dance at this destination'

},

{id:3,
  imgSrc:img2,
  destTitle:'Titawi',
  location: 'Muzaffaernagar',
  grade:'CULTURAL RELAX',
  fees: '$700$',
  description:'here we do romance and perfect dance at this destination'

},

{id:4,
  imgSrc:img3,
  destTitle:'Mumbai',
  location: 'india',
  grade:'CULTURAL RELAX',
  fees: '$700$',
  description:'here we do romance and perfect dance at this destination'

},

{id:5,
  imgSrc:img4,
  destTitle:'indor',
  location: 'india',
  grade:'CULTURAL RELAX',
  fees: '$700$',
  description:'here we do romance and perfect dance at this destination'

},

{id:6,
  imgSrc:img5,
  destTitle:'banglore',
  location: 'india',
  grade:'CULTURAL RELAX',
  fees: '$700$',
  description:'here we do romance and perfect dance at this destination'

},

{id:7,
  imgSrc:img6,
  destTitle:'lucknow',
  location: 'india',
  grade:'CULTURAL RELAX',
  fees: '$700$',
  description:'here we do romance and perfect dance at this destination'

},

{id:8,
  imgSrc:img7,
  destTitle:'jaipur',
  location: 'india',
  grade:'CULTURAL RELAX',
  fees: '$700$',
  description:'here we do romance and perfect dance at this destination'

},

{id:9,
  imgSrc:img8,
  destTitle:'bangkok ',
  location: 'Thailand',
  grade:'CULTURAL RELAX',
  fees: '$700$',
  description:'here we do romance and perfect dance at this destination'

},

{id:10,
  imgSrc:img9,
  destTitle:'singapure',
  location: 'singapure',
  grade:'CULTURAL RELAX',
  fees: '$700$',
  description:' here we do romance and perfect dance at this destination /here we do romance and perfect dance at this destination '

},

{id:11,
  imgSrc:img10,
  destTitle:'Bora Bora',
  location: 'New Zealand',
  grade:'CULTURAL RELAX',
  fees: '$700$',
  description:'here we do romance and perfect dance at this destination'

},



]




const Main = () => {

useEffect(()=>{

  Aos.init({duration:2000})
},[]) 

  return (
    <section className='main container section'>

    <div data-aos="fade-right"   className='secTitle'>
    <h1 className='title'>
    Most visited destination
    </h1>
    </div>
    <div className='secContent grid'>

{

  Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{

    return(
   <div key={id}
   data-aos="fade-up"
   className="singleDestination">
   
<div className='imageDiv'> 
<img src={imgSrc} alt={destTitle} />
</div>

<div className='cardInfo'>
<h4 className='destTitle'>{destTitle}</h4>
<span className='continent flex'>
<HiOutlineLocationMarker className='icon' />
</span>

<div className='fees flex'>
<div className='grade'> 
<span>{grade}<small>+$</small></span>

</div>

<div className='price'>
<h5>{fees}</h5>
</div>


</div>

<div className='desc'>
<p>{description}</p>
</div>

<button className='btn flex'>
DETAILS <HiOutlineClipboard className='icon' />

</button>


</div>
</div>

    )


  })
}
 </div>
    
    </section>
  )
}

export default Main;
