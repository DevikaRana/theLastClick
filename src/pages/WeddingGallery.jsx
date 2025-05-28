import React, { useState } from "react";
import "../styles/WeddingGallery.css";
import "../styles/SplitImage.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PhotoGrid from "../components/PhotoGrid";
import weddingImage from "/images/weddingGallery.jpg";
import SplitImage from "../components/SplitView";
import Masonry from "react-masonry-css";
const GalleryCard = ({ image, title, description, heightClass, onClick }) => {
    const heightMap = {
        tall: 450,
        medium: 280,
        short: 180,
    };

    const imageHeight = heightMap[heightClass] || 280;
    const cardHeight = imageHeight + 80; // Slightly reduced for compact layout

    return (
        <div
            className="gallery-card text-center mb-3"
            style={{ height: `${cardHeight}px`, cursor: "pointer" }}
            onClick={onClick}
        >
            <img
                src={image}
                alt={title}
                className="gallery-image"
                style={{ height: `${imageHeight}px`, width: "100%", objectFit: "cover" }}
            />
            <div className="gallery-caption bg-black py-2">
                <h6 className="text-white fw-bold mb-1">{title}</h6>
                <p className="text-uppercase text-secondary small mb-0">{description}</p>
            </div>
        </div>
    );
};


const WeddingGallery = () => {
    const [selected, setSelected] = useState(null);
    const closeModal = () => setSelected(null);
    const contactHeroStyle = {
        backgroundImage: `url(${weddingImage})`,
    };
    const leftColumnItems = [
        {
            image: "/images/weddingGallery/weddingImage1.jpg",
            title: "Wedding",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.",
            height: "tall-image",
        },
    ];

    const rightColumnItems = [
        {
            image: "/images/weddingGallery/weddingImage2.jpg",
            title: "Couples",
            desc: "Suspendisse egestas accumsan.",
            height: "short-image",
        },
        {
            image: "/images/weddingGallery/weddingImage3.jpg",
            title: "Wedding Venue",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing  accumsan.",
            height: "short-image",
        },
    ];


    return (
        <section className="">
            <div className="hero-with-overlay mb-5">
                <section className="contact-hero1" style={contactHeroStyle}>
                    <p className="help-text">Wedding Galleries</p>
                    <h2 className="contact-title">COLLECTION</h2>
                    <p className="contact-subtext">
                        Wedding Galleries
                        COLLECTION
                        When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.
                    </p>
                </section>
                {/* SplitImage will overlay from the bottom of contact-hero */}
            <div className="split-image-overlay d-none d-lg-flex ">
  <SplitImage  />
</div>


            </div>
            <Container fluid className="d-flex justify-content-center col-md-8">
                <Row className="gx-4">
                    <Col xs={12} md={6}>
                        {leftColumnItems.map((item, index) => (
                            <GalleryCard
                                key={`left-${index}`}
                                image={item.image}
                                title={item.title}
                                description={item.desc}
                                heightClass={item.height?.replace("-image", "")}
                                onClick={() => setSelected(item.image)}
                            />
                        ))}
                    </Col>
                    <Col xs={12} md={6}>
                        {rightColumnItems.map((item, index) => (
                            <GalleryCard
                                key={`right-${index}`}
                                image={item.image}
                                title={item.title}
                                description={item.desc}
                                heightClass={item.height?.replace("-image", "")}
                                onClick={() => setSelected(item.image)}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>

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

export default WeddingGallery;
