import React from "react";
import { useEffect } from "react";
import "./GalleriesPage.css";
import { useLocation } from "react-router-dom";

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
      {/* Portraits Section */}
      <section id="portraits" className="gallery-section">
        <h2>Portraits</h2>
        <div className="gallery-grid">
          <img src="/images/portraits/yitzhaki.jpeg" alt="Portrait 1" />
          <img src="/images/portraits/stephen.jpeg" alt="Portrait 2" />
          <img src="/images/portraits/balboa.jpeg" alt="Portrait 3" />
          <img src="/images/portraits/ramos.jpeg" alt="Portrait 4" />
          <img src="/images/portraits/ramos2.jpeg" alt="Portrait 5" />
          <img src="/images/portraits/ramos3.jpeg" alt="Portrait 6" />
        </div>
      </section>

      {/* Weddings & Events Section */}
      <section id="weddings" className="gallery-section">
        <h2>Weddings & Events</h2>
        <div className="gallery-grid">
          <img src="/images/events/1221veil.jpeg" alt="12.21.25 Wedding" />
          <img src="/images/events/1221bride.jpeg" alt="12.21.25 Wedding" />
          <img src="/images/events/1221brideandgroom.jpeg" alt="12.21.25 Wedding" />
          <img src="/images/events/1221group1.jpeg" alt="12.21.25 Wedding" />
          <img src="/images/events/1221group3.jpeg" alt="12.21.25 Wedding" />
          <img src="/images/events/1221group2.jpeg" alt="12.21.25 Wedding" />
        </div>
      </section>

      {/* Street / Lifestyle Section */}
      <section id="travel" className="gallery-section">
        <h2>Travel & Lifestyle</h2>
        <div className="gallery-grid">
          <img src="/images/street/car.jpeg" alt="Street 1" />
          <img src="/images/street/pool.jpeg" alt="Street 2" />
          <img src="/images/street/tori.jpeg" alt="Street 3" />
          <img src="/images/street/bike.jpeg" alt="Street 4" />
          <img src="/images/street/fuji.jpeg" alt="Street 5" />
          <img src="/images/street/sunset2.jpeg" alt="Street 6" />
          <img src="/images/street/bamboo.jpeg" alt="Street 8" />
          <img src="/images/street/seoul.jpeg" alt="Streen 9" />
          <img src="/images/street/pakbaz.jpeg" alt="Streen 10" />
        </div>
      </section>

    </div>
  );
};

export default GalleriesPage;
