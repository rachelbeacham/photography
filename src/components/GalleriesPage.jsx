import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./GalleriesPage.css";

const Carousel = ({ images }) => {
  return (
    <div className="carousel">
      {images.map((src, index) => (
        <div className="carousel-slide" key={index}>
          <img src={src} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

const GalleriesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="galleries-container">
      <section id="portraits" className="gallery-section">
        <h2>Portraits</h2>
        <Carousel
          images={[
            "/images/portraits/yitzhaki.jpeg",
            "/images/portraits/stephen.jpeg",
            "/images/portraits/balboa.jpeg",
            "/images/portraits/ramos.jpeg",
            "/images/portraits/ramos2.jpeg",
            // "/images/portraits/ramos3.jpeg",
            "/images/portraits/quinceportrait2.jpeg",
            "/images/portraits/quinceportrait3.jpeg",
          ]}
        />
      </section>

      <section id="weddings" className="gallery-section">
        <h2>Weddings & Events</h2>
        <Carousel
          images={[
            "/images/events/1221veil.jpeg",
            "/images/events/1221bride.jpeg",
            "/images/events/1221brideandgroom.jpeg",
            "/images/events/1221group1.jpeg",
            // "/images/events/1221group3.jpeg",
            "/images/events/1221group2.jpeg",
            "/images/events/quince3.jpeg",
            "/images/events/quince4.jpeg",
          ]}
        />
      </section>

      <section id="travel" className="gallery-section">
        <h2>Travel & Lifestyle</h2>
        <Carousel
          images={[
            "/images/street/car.jpeg",
            "/images/street/pool.jpeg",
            "/images/street/tori.jpeg",
            "/images/street/bike.jpeg",
            "/images/street/fuji.jpeg",
            "/images/street/sunset2.jpeg",
            "/images/street/bamboo.jpeg",
            "/images/street/seoul.jpeg",
            "/images/street/pakbaz.jpeg",
          ]}
        />
      </section>
    </div>
  );
};

export default GalleriesPage;
