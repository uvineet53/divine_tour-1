import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./gallery.css";
import Slider from "react-slick";

export default function Home() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
        <div fluid className="px-20 testimonials__wrapper" >
        <Slider {...settings}>

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
              <h3>Vikas Bakshi</h3>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                Guys this is really Trustworthy, safe and secure travel company. I am really satisfied with their services. And I recommend you to use their service for traveling.                </p>
              </blockquote>
              <h3>Ankita Thakur</h3>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                I have used their services several time. They are really helpful, even in this u can change your itinerary according to you by contacting them this is a really great option.                </p>
              </blockquote>
              <h3>Akhil Dahiya</h3>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                The prices are reasonable, they are cooperative , managed everything, we had an amazing experience with them .                 </p>
              </blockquote>
              <h3>Aneet Patel</h3>
            </figcaption>
          </figure>
          <figure className="snip1533">
            <figcaption>
              <blockquote>
                <p>
                Wonderful experience, whole trip was experience was awesome , hassle free travel, thanks perfect tours and events. The trip is really memorable for us.              </p>
                </blockquote>
              <h3>Manish Rathore</h3>
            </figcaption>
          </figure>
          </Slider>
        </div>
      </section>
      {/* photo gallery end */}
    </>
  );
}
