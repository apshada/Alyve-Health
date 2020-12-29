import './App.css';
import Landing from './components/Landing/Landing';
import MovieList from './containers/MovieList/MovieList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ViewMovie from './containers/ViewMovie/ViewMovie';
import  Navbar from './components/Navbar/Navbar';
import ConfirmTicket from './containers/ConfirmTicket/ConfirmTicket';

function App() {
  return (
    <Router>
      <Navbar />
    <Switch>
        <Route
            exact path="/"
            component={ MovieList }
        ></Route>
        <Route 
            path="/ViewMovie/:MovieId"
            component={ ViewMovie }
        ></Route>
        <Route 
            path="/confirm"
            component={ ConfirmTicket }
        ></Route>
    </Switch>
</Router>
  );
}

export default App;
