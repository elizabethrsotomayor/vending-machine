import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Sardines.css"

class Sardines extends Component {
    render() {
        return (
            <div className="Sardines">
                <div className="Sardines-container">
                    <h1>You don't eat the sardines. The sardines, they eat you!</h1>
                    <Link className="Chips-back" to="/">GO BACK</Link>
                </div>
            </div>
        )
    }
}

export default Sardines;