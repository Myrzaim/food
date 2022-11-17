import React from 'react';
import { Container, Row, Col, ListGroup,ListGroupItem } from 'reactstrap';
import logo from '../../images/images/res-logo.png';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
      <Row>
        <Col lg="3" md="4" sm="6">
        <div className="footer__logo text-start">
            <img src={logo} alt="logo" />
            <h5>Mika's food</h5>
            <p>lorem</p>
          </div>
        </Col>
        <Col lg="3" md="4" sm="6">
          <h5 className='footer__title'>Delivery Time</h5>
          <ListGroup className='deliver__time-list'>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span> Sunday - Thursday</span>
              <p>10:00am - 11:00pm</p>
            </ListGroupItem>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span> Friday - Saturday</span>
              <p>Off Day</p>
            </ListGroupItem>
          </ListGroup>
        </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='deliver__time-list'>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <p> Location: Bishkek, 5mkr </p>
            </ListGroupItem>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span> Phone: 01743456543</span>
            </ListGroupItem>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Email: example@gmail.com</span>
            </ListGroupItem>
          </ListGroup></Col>
          <Col lg="3" md="4" sm="6">
            <h5 className='footer__title'>News Letter</h5>
            <p>Subscribes our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder='enter your email' />
              <span><i className="ri-send-plane-line"></i></span>
            </div>
        </Col>
        </Row>
        <Row className='mt-5'>
          <Col className='footer__end text-center'>
            <p>Copyright: 2022. Website made by Mika</p>
          </Col>
        </Row>
        </Container>
    </footer>
  )
}

export default Footer;