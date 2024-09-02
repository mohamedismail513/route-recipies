import { NavLink } from 'react-router-dom'
import './navLinks.css'

export default function NavLinks({fun,val}) {
  return (
    <div className='d-flex flex-column justify-content-between nav-links'>
      <ul className='d-flex flex-column mt-5'>
        <NavLink to='/home' onClick={fun}>Home</NavLink>
        <NavLink to='/search' onClick={fun}>Search</NavLink>
        <NavLink to="/categories"onClick={fun} >Categories</NavLink>
        <NavLink to="/area" onClick={fun}>Area</NavLink>
        <NavLink to="/ingredients" onClick={fun} >Ingredients</NavLink>
        <NavLink to="/contact" onClick={fun}>Contact Us</NavLink>
      </ul>
      <div className='ms-2'>
        <i className="bi bi-facebook"></i>
        <i className="bi bi-twitter ms-2"></i>
        <i className="bi bi-globe ms-2"></i>
        <p className='fw-bold'>
          Copyright Â© 2019 All Rights Reserved.
        </p>
      </div>
    </div>
  )
}
