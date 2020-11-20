import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import experience from '../../../../images/experience.png';
import Interface from '../../../../images/interface.png';
import Prototyping from '../../../../images/prototype.png';
import Illustration from '../../../../images/illustration.png';

const serviceData = [
  {
    id: 'SV2001',
    title: 'Experience Design',
    description: 'The point of using Lorem Ipsum is that it has a more-or-less normal.',
    img: experience,
  },
  {
    id: 'SV2002',
    title: 'Interface Design',
    description: 'The point of using Lorem Ipsum is that it has a more-or-less normal.',
    img: Interface,
  },
  {
    id: 'SV2003',
    title: 'Prototyping',
    description: 'The point of using Lorem Ipsum is that it has a more-or-less normal.',
    img: Prototyping,
  },
  {
    id: 'SV2003',
    title: 'Illustration',
    description: 'The point of using Lorem Ipsum is that it has a more-or-less normal.',
    img: Illustration,
  },
  
]


const Service = () => {
  return (
    <section className="py-5 container-fluid text-center service-bg">
      <h2 className='font-weight-bold'>What We Do</h2>
      <p className="text-muted">Our main focus is to make the User Experience very <br/> simple and easy. Simplicity is our Strength.</p>
      <div className="d-flex justify-content-center mt-4">
        <div style={{ width: '85%' }} className="row">
          {
            serviceData.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
          }
        </div>
      </div>
    </section>
  );
};

export default Service;