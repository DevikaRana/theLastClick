import React from "react";
import "../styles/Creative.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PhotoGrid from "../components/PhotoGrid";

const CreativePhtography = () => {
  const photoPaths = [
    "../../public/images/creativeExplore/creative1.jpg",
    "../../public/images/creativeExplore/creative2.jpg",
    "../../public/images/creativeExplore/creative3.jpg",
    "../../public/images/creativeExplore/creative4.jpg",
    "../../public/images/creativeExplore/creative5.jpg",
    "../../public/images/creativeExplore/creative6.jpg",
    "../../public/images/creativeExplore/creative7.jpg",
    "../../public/images/creativeExplore/creative8.jpg",
    "../../public/images/creativeExplore/creative9.jpg",
    "../../public/images/creativeExplore/creative10.jpg",
    "../../public/images/creativeExplore/creative11.jpg",
    "../../public/images/creativeExplore/creative12.jpg",
    // Add more paths as needed
  ];
  return (
    <section className="">
      <div className="contact-hero">
        <p className="help-text">Photography</p>

        <h2 className="contact-title">CREATIVE PHOTOS</h2>
        <p className="contact-subtext">
          Photography CREATIVE PHOTOS When, while the lovely valley teems with
          vapour around me, and the meridian sun strikes the upper surface of
          the impenetrable foliage of my trees.
        </p>
      </div>
      
      <PhotoGrid photos={photoPaths} />

      <footer className="footer">
        <Container fluid className="py-4 px-3">
          <Row className="align-items-center text-center text-md-start">
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <p>
                <span className="footer-label">Email :</span>{" "}
                officiallastclicks@gmail.com
              </p>
              <p>
                <span className="footer-label">Phone :</span> +91 8770155842
              </p>
            </Col>

            <Col xs={12} md={4} className="mb-3 mb-md-0 text-center">
              <p className="follow-text mb-2">Follow us</p>
              <div className="social-icons d-flex justify-content-center flex-wrap gap-2">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-behance" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
                <a href="#" className="yt-icon">
                  W
                </a>{" "}
                {/* Replace with icon image if needed */}
                <a href="#">
                  <i className="fas fa-lightbulb" />
                </a>
              </div>
            </Col>

            <Col
              xs={12}
              md={4}
              className="text-center text-md-end mt-3 mt-md-0"
            >
              <p className="copyright">
                <i className="far fa-copyright me-1" />
                2023 TheLastClicks,
                <br className="d-md-none" />
                All Right Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </section>
  );
};

export default CreativePhtography;
