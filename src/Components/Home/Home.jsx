import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from '../../images/images/hero.png';
import { Link } from "react-router-dom";
import "./Home.css";
import categoryImg01 from '../../images/images/category-01.png';
import categoryImg02 from '../../images/images/category-02.png';
import categoryImg03 from '../../images/images/category-03.png';
import categoryImg04 from '../../images/images/category-04.png';
import featureImg01 from "../../images/images/service-01.png";
import featureImg02 from "../../images/images/service-02.png";
import featureImg03 from "../../images/images/service-03.png";

const categoryData = [
    {
        display: 'Fastfood',
        imgurl: categoryImg01
    },
    {
        display: 'Pizza',
        imgurl: categoryImg02
    },
    {
        display: 'Asian Food',
        imgurl: categoryImg03
    },
    {
        display: 'Row Meat',
        imgurl: categoryImg04
    }
]
const featureData = [
    {
      title: "Quick Delivery",
      imgUrl: featureImg01,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
  
    {
      title: "Super Dine In",
      imgUrl: featureImg02,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
    {
      title: "Easy Pick Up",
      imgUrl: featureImg03,
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
    },
  ];
const Home = () => { 
    return (
    
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy way to make an order</h5>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br /> food at
                  <span> your door</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    No shipping charge
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
            </Row>
            <Row className="mb-5">
              {
                  categoryData.map((item, ind) => (
                      <Col lg='3' md='4' key={ind}>
                          <div className="category__item d-flex align-items-center gap-3">
                              <div className="category__img">
                                  <img src={item.imgurl} alt="Category__item" />
                              </div>
                              <h6>{item.display}</h6>
                          </div>
                    </Col>
                  ))
              }
             
            </Row>
            <Row className="mb-5">
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
  );
};

export default Home;