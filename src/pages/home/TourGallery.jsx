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
                Co-operative team, the tour was really unforgettable. It was really very well coordinated and was hustle free too. I really love this experience.
                </p>
              </blockquote>
              <h3>Manisha Nayar</h3>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                Best company, I’m really happy.   Good services, nice experience. Trustworthy team.
                </p>
              </blockquote>
              <h3>Tushar Saini</h3>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                Nice services, this is one of the best travel company they give best services at reasonable prices.it was so easy and effortless to book and even everything was managed by them to the last detail. 
                </p>
              </blockquote>
              <h3>Pankaj Burnal</h3>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                Mne first time aise tour package liya thh or sachi btau to wo umeed  nhi but ya mujhe bhut khushi hui inke efforts , service..sb bhut acha thh mujhe bhut pasand aya or m to aage s yhin se travel service lunga .. I’m really satisfied.
                </p>
              </blockquote>
              <h3>Vikas Bskshi</h3>
            </figcaption>
          </figure>
        </Container>
      </section>
      {/* photo gallery end */}
    </>
  );
}
