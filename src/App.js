import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Footer from "./components/Footer/Footer";
import Start from './components/Start/Start'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FormMore from "./components/FormMore/FormMore";
import NotFound from "./components/NotFound";

function App() {
    return (
        <Router>
            <div className="App">
                <Footer/>
                <div className={"content"}>
                    <Switch>
                    <Route path="//"  component={Start}/>
                    <Route path="/home/" component={Start}/>
                    <Route path="/first/" component={Form}/>
                    <Route path="/more/" component={FormMore}/>
                    <Route component={NotFound}/>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
