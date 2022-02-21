
import reactRouterDom from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Contact from './Contact';


function App() {
  
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <div className='content'>
       <Switch>
       <Route exact path="/"><Home/></Route>
       <Route path="/contact"><Contact/></Route>
       
       </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
