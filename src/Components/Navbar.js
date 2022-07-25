import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul className='navbar__ul'>
            <Link to="/studymaterial" className='navbar__ulLink'><li>Study Material</li></Link>
            <Link to="/buycourses" className='navbar__ulLink'><li>Buy Courses</li></Link>
           <Link to="/aboutus" className='navbar__ulLink'><li>About US</li></Link>
            <Link to="/contactus" className='navbar__ulLink'><li>Contact US</li></Link>
            <button><Link to="/signup" style={{color:"pink" ,textDecoration:"none"}}>Sign Up</Link></button>
            <button ><Link to="/login" className='navbar__ulLink'>Login</Link></button>
        </ul>
    </div>
  )
}

export default Navbar