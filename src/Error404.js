import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';


const Error404 = () => {
  return (
    <>
      <div id='notfound'>
      <div className='notfound'>
<div className='notfound-404'>
    <h1>404</h1>
</div>
      
      <h2>We are sorry, page not found!</h2>
      <p>The page you are looking for might have been removed had its className
      change or is temporarily unavailable.</p>
      <Link to='/'>back to homepage</Link>

      </div>
      </div>
    </>
  );
}

export default Error404;
