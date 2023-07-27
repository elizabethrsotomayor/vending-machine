import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Chips.css';

class Chips extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nBags: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            nBags: this.state.nBags + 1
        });

        var img = document.createElement("img");
        img.src = "https://www.nicepng.com/png/detail/110-1101333_potato-transparent-bag-lays-chips.png"; 
        img.height = 200; 
        img.width = 200;

        // set the position
        img.style.position = 'absolute';
        img.style.top = document.body.clientHeight * Math.random() + 'px';
        img.style.left = document.body.clientWidth * Math.random() + 'px';

        //set a css class on the image
        var class_name = "Chips-bag";
        img.setAttribute("class", class_name);

        document.body.appendChild(img);
    }

    render() {
        return (
            <div className="Chips">
                <div className="Chips-container">
                    <h1>Bags Eaten: {this.state.nBags}</h1>
                    <button onClick={this.handleClick}>Om Nom Nom</button>
                    <Link className="Chips-back" to="/">GO BACK</Link>
                </div>
            </div>
        )
    }
}

export default Chips;