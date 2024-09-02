import { Link } from "react-router-dom"
import "./singlemeal.css"
export default function SingleMeal({meal}) {
  return (
    <div className="col-3 single-container mb-3 p-0 ">
        <div className="overflow-hidden">
          <div className="position-relative ms-1 shadow">
            <Link to={`/meal/${meal.idMeal}`}>
             <div className="cover position-absolute top-0 bottom-0 start-0 end-0">
              <p className="ms-3 mt-5 fw-bolder text-black fs-3">{meal.strMeal}</p>
            </div>
            </Link>  
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-100 rounded"/>
          </div>
        </div>
    </div>
  )
}
