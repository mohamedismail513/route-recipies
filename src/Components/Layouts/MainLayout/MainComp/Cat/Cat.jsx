import {useEffect,useState } from "react"
import "./cat.css"
import axios from "axios"
import Categ from "../../../../GeneralComp/Categ/Categ"
import SingleMeal from "../../../../GeneralComp/SingleMeal/SingleMeal"
export default function Cat() {
  const [cats,setCats] = useState([])
  const [mealCats,setMealCats] = useState("")
  const [catMeals,setCatMeals] = useState([])
  

  
  const getCats = async ()=>{
    const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
    return res
  }

 const getMeals = (value)=>{
  setMealCats(value)
 }
  
 const getMealsByCat = async (value)=>{
  const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`)
  return res
 }
  useEffect(()=>{
    getCats().then(data=>{
      setCats(data.data.categories)
    })
  },[])


  useEffect(()=>{
    getMealsByCat(mealCats).then(data =>{
      setCatMeals(data.data.meals) 
    })
  },[mealCats])

  return (
  <div className="mt-5 cat-container">
    < div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        {cats? cats.map((cat,index)=>{
          return <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={index===0? "active":""} aria-current="true" aria-label= {'Slide '+(index+1)} />
        }) : ""}
      </div>
      <div className="carousel-inner w-75 m-auto">
        {cats? cats.map((cat,index)=>{
          return <Categ meals={cat} key={index} getMeals = {getMeals} />
        }) :''}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
        <span className="carousel-control-prev-icon bg-danger" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" >
        <span className="carousel-control-next-icon bg-danger" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <div className="d-flex mt-5">
      <div className="row">
        {catMeals? catMeals.map((meal,index)=>{
          return <SingleMeal meal={meal} key={index}/>
        }):""}
      </div>

    </div>
  </div>
  )
}
