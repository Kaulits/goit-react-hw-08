import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import { Suspense } from "react"



const Layout = () => {
  return (
      <div>
      <NavBar />
   <Outlet />
          
    </div>
  )
}

export default Layout