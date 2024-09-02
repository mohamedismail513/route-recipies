import { useEffect, useState } from "react"
import ingredientImd from "../../../../../images/ngredient.jpg"
import "./ing.css"
import axios from "axios"
import { Link } from "react-router-dom"

export default function Ing() {
  const [ing,setIng]= useState([])
  const getIng = async ()=>{
    let finalRes = []
    await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list").then(data=>{
      for(let i=0; i<=19; i++){
        finalRes.push(data.data.meals[i])
      }
    })
    return finalRes
  }

  useEffect(()=>{
    getIng().then(data=>{
      setIng(data)
    })
  },[])
  return (
    <div className="d-flex">
      <div className="row mt-5 ms-5">
        {ing? ing.map((ing=>{
          return <div key={ing.idIngredient}  className="col-3 single-ing-container">
                    <Link to={`/ingredients/${ing.strIngredient}`} >
                    <div className="text-center">
                        <img src={ingredientImd} alt="ingredient img" className="w-75 rounded shadow"/>
                    </div>
                    <div className="mt-1 ">
                      <p className="fw-bold text-center text-black">{ing.strIngredient}</p>
                      <p className="text-center text-black">{ing.strDescription}</p>
                    </div>
                    </Link>
                  </div>
               
        })) :""}
      </div>

    </div>
  )
}
