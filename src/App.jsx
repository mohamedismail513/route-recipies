import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import MainLayout from "./Components/Layouts/MainLayout/MainLayout"
import Home from "./Components/Layouts/MainLayout/MainComp/Home/Home"
import Area from "./Components/Layouts/MainLayout/MainComp/Area/Area"
import Contact from "./Components/Layouts/MainLayout/MainComp/Contact/Contact"
import Cat from "./Components/Layouts/MainLayout/MainComp/Cat/Cat"
import Recipies from "./Components/Layouts/MainLayout/MainComp/Recipies/Recipies"
import 'bootstrap-icons/font/bootstrap-icons.css'
import Search from "./Components/Layouts/MainLayout/MainComp/Search/Search"
import Ing from "./Components/Layouts/MainLayout/MainComp/Ingredients/Ing"
import MealDetail from "./Components/GeneralComp/MealDetail/MealDetail"
import Ingredient from "./Components/GeneralComp/Ingredient/Ingredient"


function App() {
  const routes = createBrowserRouter([
    {path:'/',element:<MainLayout/>,children:[
      {index:true,element:<Home/>},
      {path:"/home",element:<Home/>},
      {path:'/area',element:<Area/>},
      {path:'/contact',element:<Contact/>},
      {path:'/categories',element:<Cat/>},
      {path:'/recipies',element:<Recipies/>},
      {path:"/search",element:<Search/>},
      {path:"/ingredients",element:<Ing/>},
      {path:"/ingredients/:cat",element:<Ingredient/>},
      {path:"/meal/:id",element:<MealDetail/>}
    ]}
  ])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
