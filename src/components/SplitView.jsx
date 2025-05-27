import React from "react";
import "../styles/SplitImage.css";
import weddingImg from "../../public/images/SplitWeddingImage.jpg"; // update the path accordingly

const SplitImage = () => {
  const slices = 7;
  const gap = 6;

  return (
    <div style={{marginTop:'-50px', zIndex:999999}} className="container col-md-8">
      <div className="split-image-wrapper">
        {[...Array(slices)].map((_, index) => {
          const width = `calc(${100 / slices}% - ${gap - gap / slices}px)`;
          const mid = Math.floor(slices / 2);
          const step = 56;
          const maxHeight = 310;
          const height =
            maxHeight - step * Math.abs(index - mid + (slices % 2 === 0 ? 0.5 : 0));
          const verticalMargin = (maxHeight - height) / 2;

          return (
            <div
              key={index}
              className="split-slice"
              style={{
                width,
                height: `${height}px`,
                marginTop: `${verticalMargin}px`,
                marginBottom: `${verticalMargin}px`,
                backgroundImage: `url(${weddingImg})`,
                backgroundSize: `${slices * 100}% 100%`,
                backgroundPosition: `${(100 / (slices - 1)) * index}% 0`,
                marginLeft: index === 0 ? 0 : `${gap}px`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SplitImage;
