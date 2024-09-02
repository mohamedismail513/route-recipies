import { useEffect, useState } from "react"
import axios from "axios"
import SingleMeal from "../../../../GeneralComp/SingleMeal/SingleMeal"
import "./search.css"

export default function Search() {
const [inputValue,setInputValue] =  useState({
  fullName:"",
  letter:""
})
const [meals,setMeals] = useState([])
function getInput(identifier,value){
    if(identifier === 'letter'){
      if(/^[a-zA-Z]$/.test(value)){
        setInputValue((current)=>{
          return {...current,[identifier]:value,fullName:""}
        })
      }else{
        setInputValue((current)=>{
          return {...current,[identifier]:""}
        })
      }
    }else{
      if(/^[a-zA-Z\s]*$/.test(value)){
        setInputValue((current)=>{
          return {...current,[identifier]:value,letter:""}
        })
      }else{
        setInputValue((current)=>{
          return {...current,[identifier]:""}
        })
      }
    }
  
}

const getMeals = async(value)=>{
  if(value.letter){
    let res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value.letter}`)
    return res
  }
  if(value.fullName){
    let res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value.fullName}`)
    return res
  }
}



useEffect(()=>{
  if(inputValue.fullName || inputValue.letter){
    getMeals(inputValue).then(data=>{
      setMeals(data.data.meals)
    })
  }
},[inputValue])



  return (
    <div className="mt-5">
      <div className="w-75 m-auto d-flex flex-wrap justify-content-between">
        <div className="input-container">
          <input type="text" className="form-control input-style" name="fullName" placeholder="Search By name" value={inputValue.fullName} onChange={(event)=>getInput(event.target.name,event.target.value)}  />  
        </div>
        <div className="input-container">
          <input type="text" className="form-control input-style ms-2" name="letter" placeholder="Search By First Letter" value={inputValue.letter} onChange={(event)=>getInput(event.target.name,event.target.value)}  maxLength={1}  />
        </div>
      </div>
      <div className="mt-5 d-flex">
        <div className="row search-meals-container">
           {meals? meals.map(meal=>{
            return <SingleMeal key={meal.idMeal} meal={meal}/>
            }):<p className="text-danger fw-bolder fs-3" >No matched meals...</p>}
        </div>
      </div>
    </div>
  )
}
