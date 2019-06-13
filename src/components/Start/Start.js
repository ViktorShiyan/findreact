import React from 'react';
import Hello from "./Hello/Hello";
import Marketing from "./Marketing/Marketing";

export default class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""};
    }


    render() {
        return (
            <div className="container pb-3">
                <Hello/>
                <div className="container marketing">
                    <Marketing/>
                </div>
            </div>
        )
    }
}
