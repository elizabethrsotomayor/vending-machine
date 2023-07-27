import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Chips from './Chips';
import Soda from './Soda';
import Sardines from './Sardines';
import './VendingMachine.css';

class VendingMachine extends Component {
    constructor(props) {
        super(props);
        this.resetChips = this.resetChips.bind(this);
    }

    resetChips() {
        document.querySelectorAll('.Chips-bag').forEach(e => e.remove());
    }

    render() {
        this.resetChips();
        return (
            <div className="VendingMachine">
                <div className="VendingMachine-container">
                    <h1>Hello I am a vending machine, what would you like to eat?</h1>
                </div>

                <div className="VendingMachine-container">
                    <ul className="VendingMachine-nav">
                        <li><Link className="VendingMachine-item" to="/chips">Chips</Link></li>
                        <li><Link className="VendingMachine-item" to="/soda">Soda</Link></li>
                        <li><Link className="VendingMachine-item" to="/sardines">Fresh Sardines</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default VendingMachine;