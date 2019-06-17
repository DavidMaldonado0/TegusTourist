import React, { Component } from 'react';
//import logo from '../images/logo.svg';
import {FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export default class Navbar extends Component {

    state={
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }

    render() {
        return (
            <nav className="navbar"> 
                <div className="nav-center"> 
                
                <div className="nav-header"> 
                    <Link to="/">
                        <p>TEgUS TourisT</p>
                    </Link>

                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                        <FaBars className="nav-icon" />
                    </button>
                </div>
                
                <ul className={this.state.isOpen?"nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">INICIO</Link>
                    </li>
                    <li>
                        <Link to="/rooms">HABITACIONES</Link>
                    </li>
                </ul>
                </div> 
            </nav>
        )
    }
}
