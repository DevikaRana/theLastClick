import React from "react";
import "../styles/ContactUs.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { EmailIcon, Location, Phone } from "../components/SvgIcons";
import Footer from "../components/Footer";

const ContactSection = () => {
  return (
    <section className="">
      <div className="contact-hero">
        <p className="help-text">Need Help</p>
        <h2 className="contact-title">CONTACT US</h2>
        <p className="contact-subtext">
          Thank you for your interest in our photography services. We would love to hear from you and
          answer any questions you may have. Please feel free to reach out to us using any of the
          following methods:
        </p>
      </div>

      <div className="contact-section">
      <Container className="info-boxes mb-5">
        <Row className="g-4 justify-content-center">
          <Col md={4}>
            <div className="info-box text-white">
              <div className="icon"><EmailIcon/></div>
              <h6>OFFICIALLASTCLICKS@GMAIL.COM</h6>
              <p>We Will Respond To Your Email Within 8 Hours On Business Days.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="info-box text-white">
              <div className="icon"><Location/></div>
              <h6>
                GLOBAL OPERATION SUPPORT <br />
                CENTER B 115, 2ND FLOOR, SECTOR 2, NOIDA – 201301
              </h6>
              <p>Come Visit Us From Monday To Saturday From 11 AM To 6 PM.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="info-box text-white">
              <div className="icon"><Phone/></div>
              <h6>
                +91 8770155842 <br /> +91 8989750688
              </h6>
              <p>We Answer By Phone From Monday To Friday From 10 AM Until 6 PM.</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="contact-form">
        <Row>
          <Col md={8}>
            <Form>
              <Row>
                <Col sm={6}>
                  <Form.Control placeholder="First Name (Required)" className="form-control-dark pb-3 mb-3" />
                </Col>
                <Col sm={6}>
                  <Form.Control placeholder="Last Name (Required)" className="form-control-dark pb-3 mb-3" />
                </Col>
              </Row>
              <Row>
                <Col sm={6}>
                  <Form.Control placeholder="Email Address" className="form-control-dark pb-3 mb-3" />
                </Col>
                <Col sm={6}>
                  <Form.Control placeholder="Phone Number" className="form-control-dark pb-3 mb-3" />
                </Col>
              </Row>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Message"
                className="form-control-dark mb-3 "
              />
              <Button variant="outline-light" className="send-button">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={4} className="visit-us mt-4 mt-md-0">
            <h5>Visit Us</h5>
            <h6>WE’D LOVE TO HEAR WHAT YOU THINK</h6>
            <p>
              When, While The Lovely Valley Teems With Vapour Around Me, And The Meridian Sun Strikes
              The Upper Surface Of The Impenetrable Foliage Of My Trees.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  
  <Footer/>
    </section>
  );
};

export default ContactSection;
