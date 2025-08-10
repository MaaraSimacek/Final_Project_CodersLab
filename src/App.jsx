import "./App.css"

import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"

import { Outlet } from "react-router"

function App() {

  return (
    <>
      <Header />
    
      <Outlet />
      
      <Footer />
    </>
  )
}

export default App