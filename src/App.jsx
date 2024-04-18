import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import { Main } from "./style"
import Footer from "./components/Footer/Footer"

function App() {


  return (
    <>
      <Main>
        <Header/>
        <Outlet/>
        <Footer/>
      </Main>
    </>
  )
}

export default App
