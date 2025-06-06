import React from "react"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { Outlet } from "react-router-dom"


function Layout() {
    return (
        <> 
         <Header />
         <Outlet />              
         <Footer />       
        </>
    )
}

export default Layout




// above we can see outlet render kra b/w header and footer me, <outlet /> means ab HEADER AND FOOTER SAME rhega , and inke beech m jo b chize aati rhegi wo CHANGE hoti rhegi.
// similarly , agr hum ise render krte in "Bottom" me - to TOP ki 2 chize same rhegi...
