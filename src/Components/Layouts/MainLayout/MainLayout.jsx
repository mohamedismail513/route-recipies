import { Outlet } from "react-router-dom";
import Nav from "../../Nav/Nav";
import { useState } from "react";
import './mainLayout.css'
export default function MainLayout(){
    let [mainEffect,handemainEffect] = useState(false)
    const mainShow = ()=>{
        handemainEffect((current)=>{
            mainEffect= !current
            return mainEffect
        })
    }
    return (
        <div className="main-container">
            <div className="row d-flex m-0">
            <div className={`col-2 main-nav d-flex justify-content-between ${mainEffect? 'remove-nav-effect':'nav-effect'}`}>
                <Nav mainEffectfun = {mainShow} mainEffect={mainEffect} />
            </div>
            <div className= {`outlet p-0 ${mainEffect? 'move':'back'}`}>
                <Outlet/>
            </div>
            </div>
        </div>
    )
}