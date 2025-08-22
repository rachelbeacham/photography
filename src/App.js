import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';
import GalleriesPage from './components/GalleriesPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="contact-header">
          <Link className="btn-link" to="/contact">BOOK A SESSION</Link>
        </header>

        <section className="nav">
            <div className="title">Rachel Renee Photography</div>
            <div className="navigations">
                <Link className="btn-link" to="/home">Home</Link>
                <Link className="btn-link" to="/about">About</Link>
                <Link className="btn-link" to="/galleries">Galleries</Link>
                <Link className="btn-link contact-btn" to="/contact">Contact</Link>
            </div>
        </section>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/galleries" element={<GalleriesPage />} />
          {/* <Route path="/pricing" element={<PricingPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-section">
            <div className="about">
              <h3 className="title">
                RACHEL RENEE PHOTOGRAPHY
              </h3>
              <p>
                Professional photography services capturing life's most precious moments 
                with artistry and authenticity.
              </p>
            </div>
            
            <div className="links">
              <h4>
                QUICK LINKS
              </h4>
              <Link className="btn-link" to="/home">Home</Link>
              <Link className="btn-link" to="/about">About</Link>
              <Link className="btn-link" to="/galleries">Galleries</Link>
              <Link className="btn-link" to="/contact">Contact</Link>
            </div>
            
            <div>
              <h4 className="contact">
                CONTACT INFO
              </h4>
              <div className="">
                <p className="">San Diego, CA 92101</p>
                <p className="">(916) 770-9885</p>
                <p className="">rachelbeacham17@gmail.com</p>
              </div>
            </div>
          </div>
          
          <div className="copyright">
            <p className="">
              © 2025 Rachel Renee Photography. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
