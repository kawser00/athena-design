import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="priceSection text-center">
        <div className="container">
        <h1 className="athenaHeading">Choose Your Dedicated Team</h1>
            <div className="row mt-5 pt-4">
                <div className="col-md-4 mb-4">
                    <div className="priceCard">
                        <h1>$199</h1>
                        <h6>For Basic</h6>
                        <hr/>
                        <ul>
                            <li>Homepage</li>
                            <li>No Inner Page</li>
                            <li>Asset file</li>
                            <li>Source file</li>
                            <li>Free Stock Photos</li>
                            <li>10 Days Free Support</li>
                            <li>24/7 Support</li>
                        </ul>
                        <button style={{visibility:'hidden'}} className="athenaButton">Order Now</button>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="priceCard">
                        <h1>$399</h1>
                        <h6>For Preferred</h6>
                        <hr style={{visibility:'hidden'}}/>
                        <ul>
                            <li>Homepage</li>
                            <li>4 Inner Pages</li>
                            <li>Asset file</li>
                            <li>Source file</li>
                            <li>Free Stock Photos</li>
                            <li>10 Days Free Support</li>
                            <li>24/7 Support</li>
                        </ul>
                        <button className="athenaButton">Order Now</button>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="priceCard">
                        <h1>$599</h1>
                        <h6>For Elite</h6>
                        <hr/>
                        <ul>
                            <li>Homepage</li>
                            <li>8 Inner Pages</li>
                            <li>Asset file</li>
                            <li>Source file</li>
                            <li>Free Stock Photos</li>
                            <li>10 Days Free Support</li>
                            <li>24/7 Support</li>
                        </ul>
                        <button style={{visibility:'hidden'}} className="athenaButton">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    );
};

export default Pricing;