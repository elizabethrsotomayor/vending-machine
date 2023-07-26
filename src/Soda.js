import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CokeBottle from "./images/coca-cola-bottle.jpg";
import './Soda.css'

class Soda extends Component {
    render() {
        return (
            <div className="Soda">
                <img src={CokeBottle} alt="coca-cola-bottle"></img>
                <div className="Soda-container">
                    <h1>OMG SUGARRRRRR</h1>
                    <Link className="Soda-back" to="/">GO BACK</Link>
                </div>
            </div>
        )
    }
}

export default Soda;