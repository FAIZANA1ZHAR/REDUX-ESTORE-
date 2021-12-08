import React from 'react';
import { Counter } from './components/Shop';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Cart from './components/Cart';
import Nav from './components/Navbar';
//import { Navbar } from 'react-bootstrap';

function App() {
    return (
        <div className="App">

            <Router>
                <Nav />
                <Switch>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/">
                        <Counter />
                    </Route>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
