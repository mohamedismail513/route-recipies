import { ThreeCircles } from "react-loader-spinner"
import "./loader.css"
export default function Loader() {
  return (
    <div className="position-absolute top-0 bottom-0 start-0 end-0 loader-main d-flex justify-content-center">
        <div className="mt-5">
             <ThreeCircles
                visible={true}
                height="100"
                width="100"
                color="#f8fc0e80"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
       
    </div>
  )
}
