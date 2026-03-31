import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import "../styles/ContactUs.css";
import contactUsImage from '../../public/images/contactUs.jpg'; // Import the image
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { EmailIcon, Location, Phone } from "../components/SvgIcons";

const ContactSection = () => {
  const contactHeroStyle = {
    backgroundImage: `url(${contactUsImage})`
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 You can call API here

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });

    // Show toast
    setShowToast(true);
  };
  return (
    <section className="">
   
      <section className="contact-hero" style={contactHeroStyle}>
        <p className="help-text">Need Help</p>
        <h2 className="contact-title">CONTACT US</h2>
        <p className="contact-subtext">
          Thank you for your interest in our photography services. We would love to hear from you and
          answer any questions you may have. Please feel free to reach out to us using any of the
          following methods:
        </p>
      </section>

      <div className="contact-section">
        <Container className="info-boxes mb-5">
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <div className="info-box text-white">
                <div className="icon"><EmailIcon /></div>
                <h6>OFFICIALLASTCLICKS@GMAIL.COM</h6>
                <p>We Will Respond To Your Email Within 8 Hours On Business Days.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="info-box text-white">
                <div className="icon"><Location /></div>
                <h6>
                  GLOBAL OPERATION SUPPORT <br />
                  CENTER B 115, 2ND FLOOR, SECTOR 2, NOIDA – 201301
                </h6>
                <p>Come Visit Us From Monday To Saturday From 11 AM To 6 PM.</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="info-box text-white">
                <div className="icon"><Phone /></div>
                <h6>
                  +91 8770155842 <br /> +91 8989750688
                </h6>
                <p>We Answer By Phone From Monday To Friday From 10 AM Until 6 PM.</p>
              </div>
            </Col>
          </Row>
        </Container>
   <ToastContainer position="top-end" className="p-3">
  <Toast
    onClose={() => setShowToast(false)}
    show={showToast}
    delay={3000}
    autohide
    bg="dark"
  >
    <Toast.Body className="text-white">
      ✅ Message sent successfully!
    </Toast.Body>
  </Toast>
</ToastContainer>
        <Container className="contact-form">
          <Row>
            <Col md={8}>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6}>
                    <Form.Control
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name (Required)"
                      className="form-control-dark mb-3"
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name (Required)"
                      className="form-control-dark mb-3"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={6}>
                    <Form.Control
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="form-control-dark mb-3"
                    />
                  </Col>
                  <Col sm={6}>
                    <Form.Control
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="form-control-dark mb-3"
                    />
                  </Col>
                </Row>

                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="form-control-dark mb-3"
                />

                <Button type="submit" variant="outline-light" className="send-button">
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

      <footer className="footer">
        <Container fluid className="py-4 px-3">
          <Row className="align-items-center text-center text-md-start">
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <p><span className="footer-label">Email :</span> officiallastclicks@gmail.com</p>
              <p><span className="footer-label">Phone :</span> +91 8770155842</p>
            </Col>

            <Col xs={12} md={4} className="mb-3 mb-md-0 text-center">
              <p className="follow-text mb-2">Follow us</p>
              <div className="social-icons d-flex justify-content-center flex-wrap gap-2">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
                <a href="#"><i className="fab fa-behance" /></a>
                <a href="#"><i className="fab fa-linkedin-in" /></a>
                <a href="#"><i className="fab fa-pinterest-p" /></a>
                <a href="#" className="yt-icon">W</a> {/* Replace with icon image if needed */}
                <a href="#"><i className="fas fa-lightbulb" /></a>
              </div>
            </Col>

            <Col xs={12} md={4} className="text-center text-md-end mt-3 mt-md-0">
              <p className="copyright">
                <i className="far fa-copyright me-1" />
                2023 TheLastClicks,<br className="d-md-none" />
                All Right Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </section>
  );
};

export default ContactSection;
