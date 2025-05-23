import React from "react";
import "../styles/Creative.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PhotoGrid from "../components/PhotoGrid";
import Footer from "../components/Footer";
import CreativePhotoData from "../data/CreativePhotoData";
const CreativePhtography = () => {
 
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
      <PhotoGrid photos={CreativePhotoData} />

  <Footer/>
    </section>
  );
};

export default CreativePhtography;
