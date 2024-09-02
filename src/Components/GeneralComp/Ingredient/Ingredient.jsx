import { useEffect, useState } from "react"
import "./ingredient.css"
import { useParams } from "react-router-dom"
import axios from "axios"
import SingleMeal from "../SingleMeal/SingleMeal"

export default function Ingredient() {
    const [singleCatMeals,setSingleCatMeals]  = useState([])
    let {cat} = useParams()
    const getcatMeals = async(cat)=>{
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${cat}`)
        return res
    }
    useEffect(()=>{
        getcatMeals(cat).then(data=>{
            setSingleCatMeals(data.data.meals)
        })
    },[])
  return (
    <div className="d-flex ms-5 mt-5">
        <div className="row">
            {singleCatMeals? singleCatMeals.map((meal,index)=>{
                return <SingleMeal key={index} meal={meal}/>
            }) :""}
        </div>

    </div>
  )
}
