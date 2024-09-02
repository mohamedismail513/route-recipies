import { useState } from "react"
import "./nav.css"
import NavLinks from "./NavComp/NavLinks/NavLinks"
import NavLogo from "./NavComp/NavLogo/NavLogo"

export default function Nav({mainEffectfun,mainEffect}) {
  return (
    <div className= "d-flex nav-container">
        <NavLinks fun={mainEffectfun} val={mainEffect}/>
        <NavLogo fun={mainEffectfun} val={mainEffect}/>
    </div>
  )
}
