import React from 'react';
import classes from './Footer.module.css';
import {Link} from "react-router-dom";

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: ""};
    }

    render() {
        return (
            <div className={classes.c_footer}>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
                    <Link className={"navbar-brand"} to="/home">Phone-Info</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className={"nav-link"} to="/first">First number</Link>
                            </li>
                            <li className={"nav-item "}>
                                <Link className={"nav-link"} to="/more">More number</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}