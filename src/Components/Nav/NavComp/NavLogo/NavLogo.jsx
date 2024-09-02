import "./navLogo.css"
import logo from '../../../../images/logo.png'
import { NavLink } from "react-router-dom"


export default function NavLogo({fun,val}) {
  return (
    <div className="logo-nav d-flex flex-column justify-content-between nav-logo-container">
        <div className="w-75 mt-0 m-auto mt-2 "> 
          <NavLink  to="/home" onClick={fun} className="ms-2"><img src={logo} alt="Logo"  className="w-100"/></NavLink>
        </div>
        <div className="w-75 mt-0 m-auto">
            <i className =  {` ms-2 bi bi-list logo-nav-icons  ${val? "d-none":""} logo-nav-select`} onClick={fun} ></i>
            <i className= {`ms-2 bi bi-x-octagon-fill logo-nav-icons logo-nav-select ${!val? "d-none":""}`} onClick={fun}></i>
        </div>
        <div className="mt-0 d-flex flex-column">
            <i className="bi bi-share-fill logo-nav-icons"></i>
            <i className="bi bi-globe logo-nav-icons"></i>
        </div>
       
    </div>
  )
}
