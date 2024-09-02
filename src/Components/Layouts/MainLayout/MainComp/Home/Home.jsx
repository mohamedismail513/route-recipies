import axios from "axios"
import Loader from "../../../../GeneralComp/LoaderComponent/Loader"
import "./home.css"
import { useEffect, useState } from "react"
import SingleMeal from "../../../../GeneralComp/SingleMeal/SingleMeal"
export default function Home() {
  let [meals,setMeals] = useState(null)
  const getMeals = async ()=>{
    let res = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian')
    return res
    }
  useEffect(()=>{
    getMeals().then(data=>{
      setMeals(data.data.meals)
    })
  },[])
  return (
    <div className="ms-5">
      <div className="row mt-5">
           {meals? meals.map((meal)=>{
              return <SingleMeal key={meal.idMeal} meal={meal}/>
            }):''}
      </div>
    </div>
  )
}
