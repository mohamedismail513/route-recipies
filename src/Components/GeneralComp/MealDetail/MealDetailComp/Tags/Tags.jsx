import { useEffect, useState } from "react"
import "./tags.css"
export default function Tags({mealTags}) {
  let [tages,setTags] = useState([])
  useEffect(()=>{
    if(mealTags){
      setTags(mealTags.split(','))
    }
  },[mealTags])
  return (
    <div className="d-flex flex-wrap">{tages? tages.map((tag,index)=> <p key={index} className="tag m-2 p-3 rounded">{tag}</p>) : <p className="tag m-2 p-3 rounded">{'No Tags'}</p>}</div>
  )
}
