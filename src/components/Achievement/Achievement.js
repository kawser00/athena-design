import React from 'react';


import happy from '../../assets/happy@2x.png';
import projectsCompleted from '../../assets/marketing@2x.png';
import crazyMind from '../../assets/surface1@2x.png';
import runningProject from '../../assets/transportation@2x.png';

const Achievement = () => {
    return (
        <section className="achievmentSection">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5 pr-lg-5 mb-4">
                     <h1 className="athenaHeading">Our Achievements</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                </div>
                <div className="col-lg-7 mb-4">
                    <div className="row">
                        <div className="col-sm-6 mb-4 achievmentCard">
                            <div className="achievmentCardContent d-flex align-items-center justify-content-center">
                                <div className="">
                                    <img src={happy} alt=""/>
                                </div>
                                <div className="achievmentCardHeading">
                                    <h1>700+</h1>
                                    <h6>Happy Clients</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-4 achievmentCard">
                            <div className="achievmentCardContent d-flex align-items-center justify-content-center">
                                <div className="">
                                    <img src={projectsCompleted} alt=""/>
                                </div>
                                <div className="achievmentCardHeading">
                                    <h1>140+</h1>
                                    <h6>Projects Completed</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-4 achievmentCard">
                            <div className="achievmentCardContent d-flex align-items-center justify-content-center">
                                <div className="">
                                    <img src={crazyMind} alt=""/>
                                </div>
                                <div className="achievmentCardHeading">
                                    <h1>25+</h1>
                                    <h6>Crazy Minds</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 mb-4 achievmentCard">
                            <div className="achievmentCardContent d-flex align-items-center justify-content-center">
                                <div className="">
                                    <img src={runningProject} alt=""/>
                                </div>
                                <div className="achievmentCardHeading">
                                    <h1>75+</h1>
                                    <h6>Running Projects</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Achievement;