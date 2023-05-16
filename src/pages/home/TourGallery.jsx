import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./gallery.css";

export default function Home() {
  return (
    <>
      {/* photo gallery start */}
      <section className="photo-gallery-area pt-80">
        <Container fluid>
          {/* section heading */}
          <Row className="justify-content-center">
            <Col md={6}>
              <h2 className="text-center mb-4 mb-md-5">
                What Our Clients Say About Us{" "}
              </h2>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-20 testimonials__wrapper" style={{"display":"flex","justifyContent":"center"}}>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                I am just so happy to share my experience with you. The team is really co-operative, trustworthy. They managed everything for us.
                </p>
              </blockquote>
              <h3>Ayesha sharma</h3>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                Guys, this is one of the best travel company they give best services at reasonable prices.It was so easy and effortless to book and even everything was managed by them to the last detail.
                </p>
              </blockquote>
              <h3>Lakshay kumar</h3>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                I highly recommend them for all future travels. My wife and I had an amazing experience in our Dubai tour. The hotels booked were really good as well as the food served was excellent.
                </p>
              </blockquote>
              <h3>Aniket Bhardwaj</h3>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                It was their efforts that want us to travel with them again. All services were excellent and as per expectations. Thanks for making our trip the most memorable one.
                </p>
              </blockquote>
              <h3>Vanshika Mittal</h3>
            </figcaption>
          </figure>
        </Container>
      </section>
      {/* photo gallery end */}
    </>
  );
}
