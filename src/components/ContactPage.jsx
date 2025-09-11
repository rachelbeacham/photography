
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import "./ContactPage.css";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "",
    date: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rrenee_photo",  //service_id
        "template_kldcp1a",  //template_id
        formData,
        "DsN2o9Om8pO2CBVNT" //public_key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsSubmitted(true);

          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              sessionType: "",
              date: "",
              message: "",
            });
          }, 3000);
        },
        (error) => {
          console.error("Email error:", error.text);
        }
      );
  };

  const contactInfo = [
    // {
    //   icon: MapPin,
    //   title: "Studio Location",
    //   details: ["123 Photography Lane", "Creative District, CA 92101"],
    // },
    {
      icon: Phone,
      title: "Phone",
      details: ["(916) 770-9885"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["rachelbeacham17@gmail.com"],
    },
    // {
    //   icon: Clock,
    //   title: "Hours",
    //   details: [
    //     "Mon - Fri: 9AM - 6PM",
    //     "Sat: 10AM - 4PM",
    //     "Sun: By Appointment",
    //   ],
    // },
  ];

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="header-section">
        <div className="header-content">
          <h1>CONTACT</h1>
          <div className="divider"></div>
          <p>
            Ready to capture your special moments? Let&apos;s discuss your vision
            and create something beautiful together.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div>
            <h2>GET IN TOUCH</h2>

            {isSubmitted ? (
              <div className="success-message">
                <div className="check">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for your inquiry. I&apos;ll get back to you within 24
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sessionType">Session Type</label>
                    <select
                      id="sessionType"
                      name="sessionType"
                      required
                      value={formData.sessionType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select session type</option>
                      <option value="portrait">Portrait Session</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="family">Family Session</option>
                      <option value="corporate">Corporate/Headshots</option>
                      <option value="lifestyle">Lifestyle/street Photography</option>
                      <option value="event">Event Photography</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your vision, location preferences, and any specific requirements..."
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h2>CONTACT INFORMATION</h2>
            <div className="info-list">
              {contactInfo.map((info, i) => (
                <div key={i} className="info-item">
                  <info.icon className="info-icon" />
                  <div>
                    <h3>{info.title}</h3>
                    {info.details.map((d, idx) => (
                      <p key={idx}>{d}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="booking-process">
              <h3>BOOKING PROCESS</h3>
              <ol>
                <li>
                  <span className="step">1</span> Send me a message with your
                  session details
                </li>
                <li>
                  <span className="step">2</span> We&apos;ll schedule a
                  consultation call
                </li>
                <li>
                  <span className="step">3</span> 50%
                  deposit secures your date
                </li>
                <li>
                  <span className="step">4</span> We create beautiful memories
                  together!
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="cta-section">
        <div className="cta-content">
          <h2>FOLLOW MY JOURNEY</h2>
          <p>
            Stay updated with my latest work and behind-the-scenes content
          </p>
          <div className="social-buttons">
            <button>Instagram</button>
            <button>Facebook</button>
            <button>Pinterest</button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;
