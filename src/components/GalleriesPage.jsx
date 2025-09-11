import React from "react";
import "./GalleriesPage.css";

const GalleriesPage = () => {
  return (
    <div className="galleries-container">
      {/* Portraits Section */}
      <section className="gallery-section">
        <h2 id="portraits">Portraits</h2>
        <div className="gallery-grid">
          <img src="/images/portraits/ruby_stephen.jpeg" alt="Portrait 1" />
          <img src="/images/portraits/ruby.jpeg" alt="Portrait 2" />
          <img src="/images/portraits/ruby_stephen2.jpeg" alt="Portrait 3" />
        </div>
      </section>

      {/* Street / Lifestyle Section */}
      <section className="gallery-section">
        <h2 id="street">Street & Lifestyle</h2>
        <div className="gallery-grid">
          <img src="/images/street/car.jpeg" alt="Street 1" />
          <img src="/images/street/pool.jpeg" alt="Street 2" />
          <img src="/images/street/tori.jpeg" alt="Street 3" />
          <img src="/images/street/bike.jpeg" alt="Street 4" />
          <img src="/images/street/fuji.jpeg" alt="Street 5" />
          <img src="/images/street/sunset2.jpeg" alt="Street 6" />
        </div>
      </section>

      {/* Weddings & Events Section */}
      <section id="weddings" className="gallery-section">
        <h2>Weddings & Events</h2>
        <div className="gallery-grid">
          {/* <img src="/images/wedding1.jpg" alt="Wedding 1" />
          <img src="/images/wedding2.jpg" alt="Wedding 2" />
          <img src="/images/wedding3.jpg" alt="Wedding 3" /> */}
        </div>
      </section>
    </div>
  );
};

export default GalleriesPage;
