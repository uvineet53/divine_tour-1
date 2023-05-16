import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// components
import PageHeader from '../../layout/PageHeader';

// images
import about from '../../assets/img/home-banner/1.jpg';

export default function About() {

  // page title
  useEffect(() => {
    document.title='About | Divine Tour and Travels';
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
                DIVINE TOUR AND EVENTS is all set to offer inbound tours to charming destinations across the world. The company is dedicated to provide quality tourism products and ensure that its partners get new products as well as unbeatable value add-ons to existing product lines, with the aim of maximizing established and successful relationships and creating high yielding business opportunities.
                  <br />
                  DIVINE offers expert local knowledge and logistical fulfillment and has experience in managing large incentive groups, cultural tours and special interest tours. Whether it's a well earned incentive programme or a special interest group, the objective at DIVINE is to instill a sense of reward and fulfillment through well designed itineraries.
                  <br/>
                  DIVINE designs and operates programme for conference organizers, travel agents, associations and corporations for a truly satisfying, enthralling and authentic Indian experience.
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
