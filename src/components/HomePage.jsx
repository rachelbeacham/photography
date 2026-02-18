import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const featuredWorks = [
    {
      id: 1,
      title: "Portrait Sessions",
      category: "Portraits",
      image: "/images/portraits/ramos.jpeg",
      link: "/galleries#portraits",
    },
    {
      id: 2,
      title: "Wedding & Events",
      category: "Weddings",
      image: "/images/events/1221bride.jpeg",
      link: '/galleries#weddings'
    },
    {
      id: 3,
      title: "Travel & Lifestyle",
      category: "Travel & Lifestyle Photography",
      image: "/images/street/tori.jpeg",
      link: "/galleries#travel"
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "Rachel was excellent in her vision and exceeded my expectations. She captured the essence of motherhood and all that it comes with. She did this with patients and taking initiative on taking the pictures that were candid, real and authentic. Her ability to use a camera is quite unlike any other, given her creative ability and technical ability to take pictures that were not the easiest to take. My children were a big ball of energy and she really was open minded and patient throughout the process. The timing of receiving these photos in normal and appropriate range and I am very grateful for her service services that she provided. I highly recommend her services.",
      name: "Cassandra Ramos",
      role: "Portrait Client",
    },
    {
      id: 2,
      quote: "Rachel is very sweet, patient and helpful! My daughter loved her pictures, this is the first time she ever lets anyone take pictures of her. She was very shy and just had no idea what to do but Rachel made her feel comfortable and she loosened up and we got the pictures we needed! I would definitely recommend her and will be booking with her again!",
      name: "Jenn Angulo",
      role: "Special Events Client",
    }
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img
          src="/images/street/sunset.jpeg"
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
            <Link key={work.id} className="work-card" to={work.link}>
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

      {/* Testimonials section */}
      <section className="testimonials">
        <div className="section-header">
          <h2 className="section-title">KIND WORDS</h2>
          <div className="divider"></div>
          <p className="section-text">
            What clients are saying about their experience
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <div className="testimonial-author">
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
            </div>
          ))}
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
