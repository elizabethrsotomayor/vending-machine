import React, { Component } from 'react';
import { Link } from "react-router-dom";
import CokeCan from "./images/coca-cola-can.png"
import './Soda.css'

class Soda extends Component {
    render() {
        return (
            <div className="Soda">
                <img src={CokeCan} alt="coca-cola-bottle" height="300px" width="150px" className="Soda-can"></img>
                <div className="Soda-container">
                    <h1>OMG SUGARRRRRR</h1>
                    <Link className="Soda-back" to="/">GO BACK</Link>
                </div>
                <img src={CokeCan} alt="coca-cola-bottle" height="300px" width="150px" className="Soda-can"></img>
            </div>
        )
    }
}

export default Soda;