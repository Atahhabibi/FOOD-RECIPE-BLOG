import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/Home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import Sidebar from "./components/Sidebar/Sidebar"
import About from "./pages/About"
import Contact from "./pages/Contact/Contact"
import Gallery from "./components/Gallery"


const App = () => {
  return (
    <>
      <Router>
        <Sidebar/>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/gallery' component={Gallery}/>
          <Route exact path='/details/:id' component={DetailsPages} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App
