import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from 'react-bootstrap';

// images
import logo from '../assets/img/logo.png';

export default function Footer() {
  return (
    <>
      {/* footer top start */}
      <footer className='footer-area pt-60 pb-55'>
      </footer>

      {/* footer bottom start */}
      <div className="footer-bottom py-3">
        <Container>
          <p className="text-center text-white">&copy; { new Date().getFullYear() } - All rights reserved by Divine Tour and Travels.</p>
        </Container>
      </div>
    </>
  )
}
