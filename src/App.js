import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/Home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import Sidebar from "./components/Sidebar/Sidebar"


const App = () => {
  return (
    <>
      <Router>
        <Sidebar/>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:id' component={DetailsPages} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App
