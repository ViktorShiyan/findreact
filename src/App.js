import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Footer/>
            <div className={"content"}>
                <Form/>
            </div>
        </div>
    );
}

export default App;
