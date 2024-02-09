import { Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui"
import { MainPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>
        <div className="container mx-auto px-1">
          <Routes>
            <Route path="home" element={ <MainPage/> }/>
          </Routes>
        </div>

    </>
  )
}
