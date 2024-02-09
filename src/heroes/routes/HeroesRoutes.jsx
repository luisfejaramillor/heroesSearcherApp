import { Route, Routes } from "react-router-dom"
import { NavBar } from "../../ui"
import { DcPage, MainPage, MarvelPage, SearchPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>
        <div className="container mx-auto px-1">
          <Routes>
            <Route path="home" element={ <MainPage/> }/>
            <Route path="marvel" element={ <MarvelPage/> }/>
            <Route path="dc" element={ <DcPage/> }/>
            <Route path="search" element={ <SearchPage/> }/>
          </Routes>
        </div>
    </>
  )
}
