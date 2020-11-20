import React from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} height="60" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-2 active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Our Team</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="app__btn  d-inline-block" href="#">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;