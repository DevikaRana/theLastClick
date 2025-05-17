import React, { useState } from "react";
import "../styles/Creative.css";

const PhotoGrid = ({ photos = [] }) => {
  const [selected, setSelected] = useState(null);

  const closeModal = () => setSelected(null);

  return (
    <>

      <section className="photo-grid-wrapper">
        {photos.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Photography ${idx + 1}`}
            className="photo-box"
            onClick={() => setSelected(src)}
          />
        ))}
      </section>

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
    </>
  );
};

export default PhotoGrid;
