import { Camera, Users, Heart } from "lucide-react";
import { Link } from 'react-router-dom';

import "./AboutPage.css";

const AboutPage = () => {
  const stats = [
    { icon: Camera, label: "Years Experience", value: "10+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Heart, label: "Photos Captured", value: "10K+" },
  ];

  const values = [
    {
      title: "Authenticity",
      description:
        "I believe in capturing genuine moments and real emotions, creating images that tell your true story.",
    },
    {
      title: "Excellence",
      description:
        "Every shot is crafted with attention to detail and technical precision to deliver stunning results.",
    },
    {
      title: "Connection",
      description:
        "Building relationships with my clients ensures comfortable sessions and naturally beautiful photographs.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              ABOUT <span className="highlight">ME</span>
            </h1>
            <div className="divider"></div>
            <p className="hero-paragraph">
              Welcome to my world of photography. I'm a passionate photographer
              dedicated to capturing life's fleeting blips. The ones that seem insignificant
              at the time, but later on, they mean everything.
            </p>
            <p className="hero-paragraph">
              I love shooting portrait, wedding, and travel/street photography, 
              bringing a unique perspective to every shoot. My goal is to create 
              timeless images that you'll treasure forever.
            </p>
            <Link className="btn-link primary-button" to="/contact">Work With Me</Link>

          </div>
          <div className="hero-image">
            <div className="image-border"></div>
            <img
              src="/images/portraits/me.jpeg"
              alt="Professional Photographer"
              className="main-photo"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-header">
          <h2 className="section-title">MY PHILOSOPHY</h2>
          <div className="divider"></div>
          <p className="section-description">
            Photography is more than just capturing images—it's about preserving
            emotions, telling stories, and creating lasting memories that
            transcend time.
          </p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="experience-header">
          <h2 className="section-title">EXPERIENCE</h2>
          <div className="divider"></div>
        </div>

        <div className="experience-list">
          <div className="experience-card">
            <div className="experience-header-line">
              <h3 className="experience-role">Aspiring Photographer</h3>
              <span className="experience-date">2025 - Present</span>
            </div>
            <p className="experience-text">
              Specializing in portrait, wedding, and travel/street photography. Worked
              with numerous clients to capture their most important moments with
              creativity and professionalism.
            </p>
          </div>
        </div>

        <div className="button-center">
          <Link className="btn-link outline-button" to="/galleries">View My Work</Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;