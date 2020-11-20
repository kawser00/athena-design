import React from 'react';
import Navbar from '../Navbar/Navbar';
import heroRightImg from '../../assets/hero-right-illustration.png';

const HeroArea = () => {
    return (
        <div className="hero__area">
            <Navbar />
            <div className="container">
                <div className="row mt-5 d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="hero__area__left">
                            <h1>
                                Florence <br />
                                agency
                            </h1>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className="app__btn">See Pricing</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="hero__area__right">
                            <img src={heroRightImg} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;