import { NavBar } from "../../ui"

export const HeroesRoutes = () => {
  return (
    <>
        <NavBar/>
        <div className="container mx-auto px-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>01</div>
            <div>02</div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
            <div>07</div>
            <div>08</div>
            <div>09</div>
            <div>10</div>
          </div>
        </div>

    </>
  )
}
