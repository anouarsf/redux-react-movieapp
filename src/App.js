import React from 'react'
import Header from './component/header'
import MovieList from './component/MovieList'
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Description from "./Description"
import './App.css';


 function App() {
  return (
    <Router>

    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={MovieList}/>
      <Route exact path="/description/:id" component={Description}/>
    </Switch>
      

    </div>
    </Router>

  )
}



export default App;