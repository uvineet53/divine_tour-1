import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// components
import PageHeader from '../../layout/PageHeader';

// images
import about from '../../assets/img/home-banner/1.jpg';

export default function About() {

  // page title
  useEffect(() => {
    document.title='About | Perfect Tours and Events';
  });

  return (
    <>
      <PageHeader />
      
      {/* about us start */}
      <section className="about-us-area pt-60 pb-60">
        <Container>
          <Row className='align-items-center'>
            <Col md={6} className='mb-3'>
              <div className="about-img">
                <img src={about} alt="about" className="img-fluid rounded" />
              </div>
            </Col>
            <Col md={6} className='mb-3'>
              <div className="about-content">
                <h3 className="text-red mb-3">HOW WE ARE BEST FOR TRAVEL !</h3>
                <p className="text-ash">
                PERFCT TOURS AND EVENTS  is the best  travel platform.. We helps around 4lakh  travellers each month. We make every trip the best trip for you. Travelers across India contact us for their trips and  Entrust us with the tour planning and we will take care of all the niggling worries right from booking tickets, hotel accommodation, arranging transportation to organizing the itinerary plan which will be unique and exciting. Owing to our experience , we narrow down up to the minutest detail to plan and develop exclusive tour packages helping our clients enjoy the most beautiful sights across the world. You would love it..!
               </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* about us end */}
    </>
  )
}
