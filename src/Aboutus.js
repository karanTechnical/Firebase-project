import React, { useState } from 'react';
import HowtouseApp from './API/Howtouse';

const Aboutus = () => {

    const [aboutData, setAboutData] = useState(HowtouseApp);
  return (
    <>
    <section className='common-secton our-services'>
    <div className='container mb-5'>
    <div className='row'>
    <div className='col-12 col-lg-5 text-center our-services-leftside-img' >
    <img src='./images/hero3.jpg' alt='aboutjpg'/>


    </div>
 {/* 1 section right side-----------------  */}
 <div className='col-12 col-lg-7 our-services-list'>
 <h3 className='mini-title'> -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h3>

 <h1 className='main-heading'> How to Use the App ?
 </h1>

  {
    aboutData.map((curElem) =>{
        const{id, title, info} = curElem;
        return(
            <>
            <div className='row our-services-info' key={id}>
 <div className='col-1 our-services-number'>{id}</div>
 <div className='col-10 our-services-data'>
 <h2>{title}</h2>
 <p className='main-hero-para'>  {info}</p>

 </div>

 </div>
            </>
        )
    })
  }


 <br/>
 <button className='btn-style btn-style-border'>Learn More</button>

 </div>
    </div>

    </div>

    </section>


    {/* 2nd part of about us ----------------------*/}


    <section className='common-secton our-services our-services-rightside'>
    <div className='container mb-5'>
    <div className='row'>
    
 {/* 1 section right side-----------------  */}
 <div className='col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column
 '>
 <h3 className='mini-title'> -- Support In any language</h3>

 <h1 className='main-heading'> world class support is <br/> available 24/7
 </h1>

  {
    aboutData.map((curElem) =>{
        const{id, title, info} = curElem;
        return(
            <>
            <div className='row our-services-info' key={id}>
 <div className='col-1 our-services-number'>{id}</div>
 <div className='col-10 our-services-data'>
 <h2>{title}</h2>
 <p className='main-hero-para'>  {info}</p>

 </div>

 </div>
            </>
        )
    })
  }


 <br/>
 <button className='btn-style btn-style-border'>Learn More</button>

 </div>
{/* imgages section--------------------------- */}
 <div className='col-12 col-lg-5  our-services-rightside-img' >
    <img src='./images/callcenter.jpg' alt='aboutjpg'/>


    </div>
    </div>

    </div>

    </section>
     
    </>
  );
}

export default Aboutus;
