import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import MovieList from "./components/Movies/MoviesList";
import MoviePage from "./page/MoviePage"



export default function App () {
 
  return (
    <div>
     <Router>
       <Switch>
         <Route to="/" exact path component={MoviePage}/>
         <Route path="/:id" component={MoviePage}/>
       </Switch>
     </Router>

    </div>
 

  )
}

