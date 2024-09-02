import { useEffect, useState } from "react"
import "./area.css"
import axios from "axios"
import { NavLink } from "react-router-dom"
import SingleMeal from "../../../../GeneralComp/SingleMeal/SingleMeal"

export default function Area() {
  const [areas,setAreas] = useState([])
  const [areaMeals,setAreaMeals] = useState(null)
  const [meals,setMeals] = useState([])
  const [isSelected,setIsSelected] = useState(false);
  const getAllAreas = async()=>{
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    return res
  }

  const handelClick = (e)=>{
    setAreaMeals((prev)=>{
      if(prev){
        if(prev === areaMeals){
          setIsSelected(current =>{
            setTimeout(()=>{
              setIsSelected(true)
            },500)
            current = false
            return current
          })
          prev = e.target.innerText
          console.log("from inside the if",areaMeals)
          return prev
        }
      }else{
        prev = e.target.innerText
        console.log(prev)
        setIsSelected(true)
        return prev
      }
    })
  }

  const getmeals = async (area)=>{
    const res = axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    return res
  }
  
  useEffect(()=>{
    getAllAreas().then(data=>{
      setAreas(data.data.meals)
    })
  },[])


  useEffect(()=>{
    getmeals(areaMeals).then(data=>{
      setMeals(data.data.meals)
    })
  },[areaMeals])
  return (
    <div className="d-flex">
      <div className="mt-5">
          <ul>
            {areas? areas.map((area,index)=>{
              return <li key={index} className={`area-links ${areaMeals === area.strArea? "selected":""}`}  onClick={(e)=>handelClick(e)}>{area.strArea}</li>
            }) :""}
          </ul>
      </div>
      <div className={`mt-5 d-flex ${isSelected? "area-meals-container-show":"area-meals-container"}`}>
        <div className="row">
            {meals? meals.map((meal,index)=>{
              return <SingleMeal meal={meal} key={index}/>
            }) : ""}
        </div>
      </div>
    </div>
  )
}
