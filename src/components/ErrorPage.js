import React from 'react'
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    
    const navigate= useNavigate();
    
   function handleClick(){
        navigate('/home');
    }

  return (
    <div className='text-center text-success ' >
        <h1  >Page not found</h1>
        <h3>Go to the home page!</h3>
        <h4 className='btn-orange' type="button" onClick={handleClick} >Home page</h4>
    </div>
  )
}

export default ErrorPage