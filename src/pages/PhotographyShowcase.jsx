import React, { useState } from "react";
import "../styles/Showcase.css";
import showcaseImage from "/images/photographyShowcaseExplore.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Masonry from "react-masonry-css";

const PhotoshowcaseData = [
  {
    image: "/images/photographyShowcase/photographyShowcase1.jpg",
    title: "Roadside",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.",
    height: "short-image",
  },
  {
    image: "/images/photographyShowcase/photographyShowcase2.jpg",
    title: "Mountain",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.",
    height: "tall-image",
  },
  {
    image: "/images/photographyShowcase/photographyShowcase3.jpg",
    title: "Smile",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.",
    height: "short-image",
  },
  {
    image: "/images/photographyShowcase/photographyShowcase4.jpg",
    title: "Video",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.",
    height: "short-image",
  },
  {
    image: "/images/photographyShowcase/photographyShowcase5.jpg",
    title: "Perspective",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.",
    height: "medium-image",
  },
  {
    image: "/images/photographyShowcase/photographyShowcase6.jpg",
    title: "Party",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.",
    height: "short-image",
  },
  {
    image: "/images/photographyShowcase/photographyShowcase7.jpg",
    title: "Seaside",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.",
    height: "tall-image",
  },
  {
    image: "/images/photographyShowcase/photographyShowcase9.jpg",
    title: "Sports",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.",
    height: "medium-image",
  },
  {
    image: "/images/photographyShowcase/photographyShowcase10.jpg",
    title: "Makeup",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.",
    height: "medium-image",
  },
  {
    image: "/images/photographyShowcase/photographyShowcase11.jpg",
    title: "Indoor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.",
    height: "medium-image",
  },
  {
    image: "/images/photographyShowcase/photographyShowcase8.jpg",
    title: "Models",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.",
    height: "medium-image",
  },
];

const GalleryCard = ({ image, title, description, heightClass, onClick }) => {
  const heightMap = {
    tall: 450,
    medium: 280,
    short: 180,
  };

  const imageHeight = heightMap[heightClass] || 280;
  const cardHeight = imageHeight + 100;

  return (
    <div
      className="photo-card mx-auto"
      style={{ height: `${cardHeight}px`, cursor: "pointer" }}
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="photo-img"
        style={{ height: `${imageHeight}px` }}
      />
      <div className="photo-text">
        <h6 className="fw-bold text-white text-center">{title}</h6>
        <p className="text-secondary text-center">{description}</p>
      </div>
    </div>
  );
};

const PhotographyShowcase = () => {
  const [selected, setSelected] = useState(null);
  const closeModal = () => setSelected(null);
  const contactHeroStyle = {
    backgroundImage: `url(${showcaseImage})`,
  };

  return (
    <section>
      <section className="contact-hero" style={contactHeroStyle}>
        <p className="help-text">Showcases</p>
        <h2 className="contact-title">COLLECTION</h2>
        <p className="contact-subtext">
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper surface of the impenetrable foliage of
          my trees.
        </p>
      </section>

      <Container fluid>
        <Masonry
          breakpointCols={{ default: 3, 992: 2, 576: 1 }}
          className="my-masonry-grid justify-content-center"
          columnClassName="my-masonry-grid_column"
        >
          {PhotoshowcaseData.map((item, index) => (
            <GalleryCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.desc}
              heightClass={item.height?.replace("-image", "")} // Maps correctly to "short", "medium", "tall"
              onClick={() => setSelected(item.image)}
            />

          ))}
        </Masonry>
      </Container>
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
      {selected && (
        <div className="photo-modal-overlay" onClick={closeModal}>
          <div
            className="photo-modal-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <img src={selected} alt="Full-size" className="modal-img" />
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotographyShowcase;