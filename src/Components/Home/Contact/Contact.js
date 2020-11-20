import React from 'react';
import './Contact.css';
import ProjectImg from '../../../images/projectImg.png'

const Contact = () => {
  return (
    <section className="container-fluid contact-container my-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6"><img height="500" className="img-fluid" src={ProjectImg} alt="" /></div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="w-75 m-auto mt-2">
            <h1 className="font-weight-bold">Stay Running & Project</h1>
            <p className="text-muted my-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
            <button className="btn btn-success mt-2">Contact us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;