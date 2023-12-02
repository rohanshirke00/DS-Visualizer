import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/pages/Homepage/Home';
import About from './Components/pages/About/About'
import SignUp from './Components/pages/Sign-up/SignUp'
import Services from './Components/Services/Services';
import SApp from './Components/Algorithms/Sorting/SApp';
import BApp from './Components/Algorithms/Binary tree/BApp';

function App(){
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/algorithms" exact component={Services} />
                <Route path="/sign-up" exact component={SignUp} />
                 <Route path="/sorting" exact component={SApp} />
                <Route path="/binarytree" exact component={BApp} /> 
            </Switch>
        </Router>
    )
}

export default App;
