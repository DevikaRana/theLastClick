import React from 'react'
import "../styles/ContactUs.css";
import { Container, Row, Col } from 'react-bootstrap';
const Footer = () => {
  return (
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
  )
}

export default Footer
