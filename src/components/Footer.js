import React from 'react'
import { Link } from 'react-router-dom'


 const Footer = () => {
  return (
    <div style={{background:'#000000'}} >
       <div className="navbar navbar-light bg-light" style={{display:'flex',justifyContent:'flex-start',flexDirection:'column',alignItems:' flex-start'}}>
        <nav>
          <Link style={{fontSize:'.8rem'}} className="navbar-brand" to="/">Home</Link>
          <Link style={{fontSize:'.8rem'}} className="navbar-brand" to="/about">About Us</Link>
          <Link style={{fontSize:'.8rem'}}  className="navbar-brand"  to="/mission">Our Mission Statement</Link>
          <Link style={{fontSize:'.8rem'}}  className="navbar-brand" to="/blog">FFT Blog</Link>
        </nav>
        <nav>
          <Link className="navbar-brand" to="/"><i class="fab fa-facebook"></i></Link>
          <Link  className="navbar-brand" to="/about"><i class="fab fa-twitter"></i></Link>
          <Link  className="navbar-brand"  to="/mission"><i class="fab fa-youtube"></i></Link>
          <Link  className="navbar-brand" to="/blog"><i class="fab fa-github"></i></Link>
          <Link  className="navbar-brand" to="/blog"><i class="fab fa-linkedin-in"></i></Link>
        </nav>
      </div>
    </div>
  )
}
export default Footer;