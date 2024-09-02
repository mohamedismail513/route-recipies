import "./categ.css"

export default function Categ ({meals,getMeals}){
    const handelCick = (event)=>{
        getMeals(event.target.id)
    }
    return (
        <div className={meals.idCategory === "1"? "carousel-item active position-relative cat-items-container":"carousel-item position-relative cat-items-container"}  >
            <img src={meals.strCategoryThumb} className="d-block w-75 m-auto" alt={meals.strCategory} />
            <div>
                <button className="btn btn-info mt-2" id={meals.strCategory} onClick={(event)=>handelCick(event)} >Show Meals</button>
            </div>
            <div className="cat-cover">
                <h3 className="mt-1 fw-bolder">{meals.strCategory}</h3>
                <p>{meals.strCategoryDescription}</p>
            </div>
        </div>
    )    
}


