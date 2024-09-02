import { useEffect, useState } from "react"
import "./mealRecipies.css"
export default function MealRecipies({mealData}) {
  let [recipies,setRecipies] = useState([])
  useEffect(()=>{
    if(mealData){
       setRecipies(Object.keys(mealData).filter(element=> (element.includes('strIngredient')&& mealData[element]!==""))) 
    }
  },[mealData])

  return (
    <>
    <div className="d-flex flex-wrap">{recipies.map((element,index)=> <p key={index} className="rec p-3 rounded m-2">{mealData['strMeasure'+(index+1)]} {mealData[element]}</p>)}</div>
    </>
  )
}
