import React, { useState } from "react";
import "../styles/Showcase.css";
import showcaseImage from "/images/photographyShowcaseExplore.jpg"; // public folder path
import { Container } from "react-bootstrap";




const PhotoshowcaseData =
    [
        { image: '../../public/images/photographyShowcase/photographyShowcase1.jpg', title: "Roadside", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.", height: "short-image" },
        { image: '../../public/images/photographyShowcase/photographyShowcase4.jpg', title: "Video", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.", height: "medium-image" },
        { image: '../../public/images/photographyShowcase/photographyShowcase7.jpg', title: "Seaside", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.", height: "tall-image" },
        { image: '../../public/images/photographyShowcase/photographyShowcase10.jpg', title: "Makeup", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.", height: "short-image" },
        { image: '../../public/images/photographyShowcase/photographyShowcase2.jpg', title: "Mountain", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.", height: "tall-image" },
        { image: '../../public/images/photographyShowcase/photographyShowcase6.jpg', title: "Party", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.", height: "short-image" },
        { image: '../../public/images/photographyShowcase/photographyShowcase9.jpg', title: "Sports", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.", height: "short-image" },
        { image: '../../public/images/photographyShowcase/photographyShowcase11.jpg', title: "indoor", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.", height: "medium-image" },
        { image: '../../public/images/photographyShowcase/photographyShowcase3.jpg', title: "Smile", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.", height: "tall-image" },
        { image: '../../public/images/photographyShowcase/photographyShowcase5.jpg', title: "Perspective", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.", height: "short-image" },
        { image: '../../public/images/photographyShowcase/photographyShowcase8.jpg', title: "Models", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.", height: "tall-image" },
        // { image: '../../public/images/photographyShowcase/photographyShowcase1.jpg', title: "Smile", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse egestas accumsan.", height: "short-image" },
    ];


// GalleryCard Component
const GalleryCard = ({ image, title, description, heightClass }) => {
    // Define image height based on heightClass
    const heightMap = {
        tall: "450px",
        medium: "280px",
        short: "180px",
    };

    const imageHeight = heightMap[heightClass] || "280px"; // fallback to medium

    return (
        <div className={`photo-card ${heightClass}`}>
            <img
                src={image}
                alt={title}
                className="photo-img"
                style={{ height: imageHeight }}
            />
            <div className="photo-text">
                <h6 className="fw-bold text-white text-center">{title}</h6>
                <p className="text-secondary text-center">{description}</p>
            </div>
        </div>
    );
};


// Main Component
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

            <Container fluid >
                <section className="photo-grid-wrapper">
                    {PhotoshowcaseData.map((item, index) => {
                        // Define a repeating pattern of heights (you can tweak this)
                        const heightPattern = ["short", "short", "medium", "medium", "tall", "medium", "medium", "medium", "medium", "medium", "medium"];
                        const heightClass = heightPattern[index % heightPattern.length];

                        return (
                            <GalleryCard
                                key={index}
                                image={item.image}
                                title={item.title}
                                description={item.desc}
                                heightClass={heightClass}
                                onClick={() => setSelected(item.image)}
                            />
                        );
                    })}
                </section>
            </Container>
            {selected && (
                <div className="photo-modal-overlay" onClick={closeModal}>
                    <div
                        className="photo-modal-inner"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-btn" onClick={closeModal}>
                            &times;
                        </button>
                        <img src={selected} alt="Full‑size" className="modal-img" />
                    </div>
                </div>
            )}
        </section>

    );
};

export default PhotographyShowcase;
