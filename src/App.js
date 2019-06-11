import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Footer from "./components/Footer/Footer";
import Start from './components/Start/Start'
import {BrowserRouter as Router, Route} from "react-router-dom";
import FormMore from "./components/FormMore/FormMore";

function App() {
    return (
        <Router>
            <div className="App">
                <Footer/>
                <div className={"content"}>
                    <Route path="/home" component={Start}/>
                    <Route path="/first" component={Form}/>
                    <Route path="/more" component={FormMore}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
