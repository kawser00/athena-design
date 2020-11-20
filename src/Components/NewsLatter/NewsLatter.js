import React from 'react';

const NewsLatter = () => {
    return (
        <div className="newslatter__area py-5 my-5">
            <div className="container d-flex justify-content-center align-items-center text-center">
                <div className="row ">
                    <div className="col-md-12">
                        <h2>Get Your Design Right, right now!</h2>
                        <p>Be the first know our latest offers and updates</p>
                        <div className="newsLatter__form">
                            <input placeholder="Enter you email address" type="text" />
                            <button>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLatter;