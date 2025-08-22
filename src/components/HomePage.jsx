import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const featuredWorks = [
    {
      id: 1,
      title: "Portrait Sessions",
      category: "Portraits",
      image:
        "https://images.unsplash.com/photo-1594171549465-a28ba0220a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 2,
      title: "Wedding Photography",
      category: "Weddings",
      image:
        "https://images.unsplash.com/photo-1722872112546-936593441be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 3,
      title: "Lifestyle/Street Photography",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1721003080968-9923474ad739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1594171549465-a28ba0220a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Professional Photography"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">
            CAPTURING <span className="highlight">MOMENTS</span>
          </h1>
          <p className="hero-subtitle">
            Professional Photography that tells your story
          </p>
          <div className="hero-buttons">
            <Link to="/galleries" className="btn primary-btn">
              View Galleries →
            </Link>
            <Link to="/contact" className="btn outline-btn">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="featured">
        <div className="section-header">
          <h2 className="section-title">FEATURED WORK</h2>
          <div className="divider"></div>
          <p className="section-text">
            Explore my passion for photography through these carefully selected
            pieces
          </p>
        </div>

        <div className="featured-grid">
          {featuredWorks.map((work) => (
            <Link key={work.id} className="work-card" to="/galleries">
              <div className="work-image-wrapper">
                <img src={work.image} alt={work.title} className="work-image" />
                <div className="work-overlay"></div>
              </div>
              <div className="work-content">
                <p className="work-category">{work.category}</p>
                <h3 className="work-title">{work.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="button-center">
          <Link to="/galleries" className="btn outline-btn">
            View All Galleries →
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2 className="cta-title">
          LET'S CREATE SOMETHING{" "}
          <span className="highlight">BEAUTIFUL</span>
        </h2>
        <p className="cta-text">
          Ready to capture your special moments? Let's discuss your vision.
        </p>
        <Link to="/contact" className="btn primary-btn">
          Start Your Project
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
