import React, { useState } from 'react';


const Contact = () => {
 
  const [userData, setUserData] = useState({
    firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  message: "",
  });
  
  let name,value;
  const postUserData = (event)=>{
    name = event.target.name;
    value = event.target.value;

    setUserData({...userData,[name]: value});

  }
  // connect with fire base code start
  
  const submitData= async(event)=>{
   event.preventDefault();

const { firstName, lastName, phone, email, address, message } = userData;
if( firstName && lastName && phone, email && address && message ){




   const res = await fetch("https://completewebsitereact-default-rtdb.firebaseio.com/userData.json",
   {
    method :"POST",
    headers:{
     "Content-Type" : "application/json",
   },

   body:JSON.stringify({firstName, lastName, phone, email, address, message
  }),

   }
   )

   if(res){
    setUserData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      message: "",
    })
    alert("Data Store Success");
  }else{
    alert("plese Fill the Data")
  }
}else{
  alert("plese Fill the Data")
}
  }

 

  

  return (
    <>

     <section className='contactus-section'>
     <div className='container'>
     <div className='row'>
     <div className='col-12 col-lg-10 mx-auto'>
     <div className='row'>
     <div className='contact-leftside col-12 col-lg-5'>
     <h1 className='main-heading fw-bold'>Contact With our <br/> Sales Team.</h1>
     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, illum dolorum nostrum, minus odit 
     consectetur quidem, non consequatur
      debitis tenetur necessitatibus assumenda! .
     <p className='main-hero-para'></p>
     <figure>
  <img src='./images/hero1.jpg' className='img-fluid' alt='herojpg'/>
     </figure>
     </div>
{/* =================================contac right:  side form page */}

<div className='contact-rightside col-12 col-lg-7'>
<form method='POST'>

<div className='row'>
 <div className='col-12 col-lg-6 contact-input-feild'>
<input  type="text" name="firstName" id=""  className='form-control' placeholder='First Name'
  value={userData.firstName}
  onChange={postUserData}
/>
 </div>

 <div className='col-12 col-lg-6 contact-input-feild'>
<input  type="text" name="lastName" id="" className='form-control' placeholder='Last Name'
  value={userData.lastName}
  onChange={postUserData}
/>
 </div>
</div>

<div className='row'>
 <div className='col-12 col-lg-6 contact-input-feild'>
<input  type="text" name="phone" id=""  className='form-control' placeholder='Phone Number'
  value={userData.phone}
  onChange={postUserData}
/>
 </div>

 <div className='col-12 col-lg-6 contact-input-feild'>
<input  type="text" name="email" id="" className='form-control' placeholder='Email ID'
  value={userData.email}
  onChange={postUserData}

/>
 </div>
</div>
<div className='row'>
<div className='col-12 contact-input-feild'>
<input type="text" name="address" id="" className='form-control' placeholder="Add Address"
  value={userData.address}
  onChange={postUserData}
/>

</div>

</div>

<div className='row'>
<div className='col-12'>
<input type="text" name="message" id="" className='form-control' placeholder="Enter Your Message"
  value={userData.message}
  onChange={postUserData}
/>

</div>

</div>
<div className='form-check form-checkbox-style'>
<input type="checkbox" className='form-check-input' value="" id="flexCheckChecked"  />
<label className='form-check-label main-hero-para'>I agree that the karanTechnical may contact  me at textShadow: email
 address or phone Number above</label>

</div>
<button type='submit' className='btn btn-style w-100' onClick={submitData}> Submit


</button>
</form>

</div>


     </div>

     </div>

     </div>

     </div>

     </section> 

    </>
  );
}

export default Contact;
