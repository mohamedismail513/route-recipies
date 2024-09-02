import { useParams,Link } from 'react-router-dom'
import './mealDetail.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import MealRecipies from './MealDetailComp/Recipies/MealRecipies'
import Tags from './MealDetailComp/Tags/Tags'

export default function MealDetail() {
    let [mealData,setMealData] = useState(null)

    let {id} = useParams()
    let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id
    
    const getMealDetail =async (url)=>{
        let data =await axios.get(url).then((data)=>{
            return data.data.meals[0]
        })
        return data
    }

    useEffect(()=>{
        getMealDetail(url).then((data)=> 
            setMealData(data)
        )
    },[])

  return (
    <div className='mealDetail-container mt-5'>
        <div className='row d-flex justify-content-between' id='mealDetail'>
            <div className='col-3 ms-5 mt-3'>
                <div className='bg-danger shdaow rounded'>
                 <img src={mealData?.strMealThumb} alt={mealData?.strMeal}  className='w-100 rounded'/>
                </div>
                <div>
                    <p className='fs-2 fw-bolder'>{mealData?.strMeal}</p>
                </div>
            </div>
            <div className='col-8'>
                <h3 className='text-danger'>Instruction</h3>
                <p>{mealData?.strInstructions}</p>
                <h3 className='text-danger'>Area:<span className='ms-3 fs-3 fw-bolder text-black'>{mealData?.strArea}</span></h3>
                <h3 className='text-danger'>Category:<span className='ms-3 fs-3 fw-bolder text-black'>{mealData?.strCategory}</span></h3>
                <h3 className='text-danger'>Recipies:</h3>
                <div>
                    <MealRecipies mealData = {mealData}/>
                </div>
                <h3 className='text-danger'>Tags:</h3>
                <div>
                    <Tags mealTags={mealData?.strTags}/>
                </div>
                <div className='mt-3'>
                    <Link to={mealData?.strSource}><button className='btn btn-secondary'><i className=" bi bi-file-earmark-binary fs-3 mt-2"></i><span className='ms-1 fs-3'>Source</span></button></Link>
                    <Link to={mealData?.strYoutube} className='ms-2'><button className='btn btn-danger'><i className="bi bi-youtube fs-3 mt-2"></i><span className='ms-1 fs-3'>Youtube</span></button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
