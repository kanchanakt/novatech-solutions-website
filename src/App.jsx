
import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import ServiceDetails from "./pages/ServiceDetails";


/* =========================================
   SERVICES DATA
========================================= */

const services = [
  {
    id: "web-development",
    icon: "💻",
    title: "Web Development",
    description:
      "Modern, responsive and high-performance websites designed for your business."
  },
  {
    id: "mobile-solutions",
    icon: "📱",
    title: "Mobile Solutions",
    description:
      "Digital experiences that work beautifully across mobile, tablet and desktop."
  },
  {
    id: "business-software",
    icon: "⚙️",
    title: "Business Software",
    description:
      "Custom applications to simplify operations and improve productivity."
  },
  {
    id: "digital-consulting",
    icon: "📊",
    title: "Digital Consulting",
    description:
      "Technology guidance to help your business grow and stay competitive."
  }
];


/* =========================================
   HOMEPAGE COMPONENT
========================================= */

function HomePage() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  // Replace with your actual WhatsApp number
  const whatsappNumber = "7349353316";


  /* CLOSE MOBILE MENU */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  /* FORM INPUT HANDLING */

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  /* CONTACT FORM SUBMISSION */

  const handleSubmit = (e) => {

    e.preventDefault();

    const subject = encodeURIComponent(
      `Website enquiry from ${form.name}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Service: ${form.service}\n` +
      `Message: ${form.message}`
    );

    window.location.href =
      `mailto:hello@novatechsolutions.example?subject=${subject}&body=${body}`;

  };


  /* WHATSAPP INTEGRATION */

  const openWhatsApp = () => {

    const message = encodeURIComponent(
      "Hello NovaTech Solutions! I would like to know more about your services."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );

  };


  return (

    <div className="website">


      {/* =====================================
          NAVBAR
      ===================================== */}

      <header className="navbar">

        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
        >

          <span className="logo-icon">N</span>

          <span>
            NovaTech
            <span className="logo-light"> Solutions</span>
          </span>

        </a>


        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >

          {menuOpen ? "✕" : "☰"}

        </button>


        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          <a href="#home" onClick={closeMenu}>Home</a>

          <a href="#about" onClick={closeMenu}>About</a>

          <a href="#services" onClick={closeMenu}>Services</a>

          <a href="#contact" onClick={closeMenu}>Contact</a>

          <a
            href="#contact"
            className="nav-button"
            onClick={closeMenu}
          >
            Get Started →
          </a>

        </nav>

      </header>



      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="hero" id="home">

        <div className="hero-content">

          <span className="eyebrow">
            INNOVATION • TECHNOLOGY • GROWTH
          </span>


          <h1>
            Building Digital Solutions for a
            <span> Smarter Future.</span>
          </h1>


          <p>
            We help businesses grow with innovative technology,
            modern websites and reliable digital solutions.
            Your vision, our technology.
          </p>


          <div className="hero-buttons">

            <a href="#services" className="primary-btn">
              Explore Services →
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Us
            </a>

          </div>


          <div className="hero-trust">

            <span>✓ Modern Technology</span>

            <span>✓ Customer Focused</span>

            <span>✓ Reliable Solutions</span>

          </div>

        </div>



        <div className="hero-visual">

          <div className="visual-glow"></div>

          <div className="visual-card">

            <div className="visual-top">

              <span>✦</span>

              <span>Digital Innovation</span>

            </div>


            <div className="visual-center">

              <div className="orbit orbit-one"></div>

              <div className="orbit orbit-two"></div>

              <div className="orbit-core">N</div>

            </div>


            <h3>
              Technology That Moves You Forward
            </h3>

            <p>
              Creating smarter digital experiences.
            </p>

          </div>

        </div>

      </section>



      {/* =====================================
          STATISTICS
      ===================================== */}

      <section className="stats">

        <div>
          <h2>50+</h2>
          <p>Projects Delivered</p>
        </div>

        <div>
          <h2>30+</h2>
          <p>Happy Clients</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Digital Accessibility</p>
        </div>

        <div>
          <h2>100%</h2>
          <p>Commitment to Quality</p>
        </div>

      </section>



      {/* =====================================
          ABOUT SECTION
      ===================================== */}

      <section className="about section" id="about">

        <div className="about-visual">

          <div className="about-box">

            <div className="about-symbol">N</div>

            <h3>Think Digital.</h3>

            <h3 className="blue-text">
              Grow Beyond.
            </h3>

            <p>
              Technology with a purpose.
            </p>

          </div>

        </div>



        <div className="about-content">

          <span className="eyebrow dark-eyebrow">
            ABOUT NOVATECH
          </span>


          <h2>
            Turning Your Ideas Into
            <span> Digital Reality.</span>
          </h2>


          <p>
            NovaTech Solutions is a fictional demonstration
            company created to showcase modern business
            website development.
          </p>


          <p>
            Our approach focuses on creating attractive,
            user-friendly and scalable digital experiences
            that help businesses establish their online presence.
          </p>


          <div className="about-points">

            <div>✓ Creative digital solutions</div>

            <div>✓ Responsive website experiences</div>

            <div>✓ Business-focused technology</div>

            <div>✓ Quality-driven development</div>

          </div>


          <a href="#contact" className="primary-btn">
            Let's Work Together →
          </a>

        </div>

      </section>



      {/* =====================================
          SERVICES SECTION
      ===================================== */}

      <section className="services section" id="services">

        <div className="section-heading">

          <span className="eyebrow dark-eyebrow">
            WHAT WE OFFER
          </span>


          <h2>
            Our <span>Services</span>
          </h2>


          <p>
            Smart technology solutions designed to help your
            business move forward.
          </p>

        </div>



        <div className="service-grid">

          {services.map((service, index) => (

            <div
              className="service-card"
              key={service.id}
            >

              <div className="service-icon">
                {service.icon}
              </div>


              <span className="service-number">
                0{index + 1}
              </span>


              <h3>
                {service.title}
              </h3>


              <p>
                {service.description}
              </p>


              {/* INDIVIDUAL SERVICE PAGE LINK */}

              <Link
                to={`/services/${service.id}`}
                className="explore-link"
              >
                Explore Now →
              </Link>

            </div>

          ))}

        </div>

      </section>



      {/* =====================================
          WHY CHOOSE US
      ===================================== */}

      <section className="why-us section">

        <div className="section-heading">

          <span className="eyebrow">
            WHY NOVATECH
          </span>


          <h2>
            Technology With a Purpose.
          </h2>


          <p>
            We focus on building digital solutions around
            real business needs.
          </p>

        </div>



        <div className="why-grid">

          <div>
            <span>01</span>

            <h3>Business First</h3>

            <p>
              Solutions designed around your goals and customers.
            </p>
          </div>


          <div>
            <span>02</span>

            <h3>Modern Design</h3>

            <p>
              Clean, attractive and easy-to-use experiences.
            </p>
          </div>


          <div>
            <span>03</span>

            <h3>Responsive</h3>

            <p>
              Seamless experiences across every screen size.
            </p>
          </div>


          <div>
            <span>04</span>

            <h3>Reliable Support</h3>

            <p>
              Clear communication throughout the project.
            </p>
          </div>

        </div>

      </section>



      {/* =====================================
          CONTACT SECTION
      ===================================== */}

      <section className="contact section" id="contact">

        <div className="contact-info">

          <span className="eyebrow dark-eyebrow">
            GET IN TOUCH
          </span>


          <h2>
            Let's Discuss Your
            <span> Next Project.</span>
          </h2>


          <p>
            Have an idea or business requirement?
            Send us an enquiry. We'd love to hear from you.
          </p>



          <div className="contact-detail">

            <span>✉</span>

            <div>
              <strong>Email</strong>
              <p>kanchanakt14@gmail.com</p>
            </div>

          </div>



          <div className="contact-detail">

            <span>☎</span>

            <div>
              <strong>Phone</strong>
              <p>+91 73493 53316 (Demo)</p>
            </div>

          </div>



          <div className="contact-detail">

            <span>📍</span>

            <div>
              <strong>Location</strong>
              <p>Bengaluru, Karnataka, India (Demo)</p>
            </div>

          </div>



          <button
            className="whatsapp-btn"
            onClick={openWhatsApp}
          >
            <span>◉</span> Chat on WhatsApp
          </button>

        </div>



        {/* CONTACT FORM */}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <h3>Send Us a Message</h3>

          <p>
            Fill in your details and we'll get in touch.
          </p>


          <div className="form-row">

            <div className="form-group">

              <label>Full Name *</label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />

            </div>


            <div className="form-group">

              <label>Email Address *</label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />

            </div>

          </div>



          <div className="form-row">

            <div className="form-group">

              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
              />

            </div>


            <div className="form-group">

              <label>Service Required *</label>

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >

                <option value="">
                  Select a service
                </option>

                <option>Web Development</option>

                <option>Mobile Solutions</option>

                <option>Business Software</option>

                <option>Digital Consulting</option>

                <option>Other</option>

              </select>

            </div>

          </div>



          <div className="form-group">

            <label>Your Message *</label>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows="5"
              required
            />

          </div>



          <button
            type="submit"
            className="primary-btn submit-btn"
          >
            Send Enquiry →
          </button>


          <small>
            Demo form: opens your email application.
            Connect a backend to receive enquiries directly.
          </small>

        </form>

      </section>



      {/* =====================================
          GOOGLE MAP
      ===================================== */}

      <section className="map-section">

        <div className="section-heading">

          <span className="eyebrow dark-eyebrow">
            FIND US
          </span>


          <h2>
            Our <span>Location</span>
          </h2>


          <p>
            Bengaluru, Karnataka, India – demo location.
          </p>

        </div>


        <iframe
          title="NovaTech demo location"
          src="https://maps.google.com/maps?q=Bengaluru%2C%20Karnataka%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

      </section>



      {/* =====================================
          CALL TO ACTION
      ===================================== */}

      <section className="cta">

        <h2>
          Ready to Build Something Amazing?
        </h2>


        <p>
          Let's turn your business vision into a digital experience.
        </p>


        <a href="#contact" className="cta-btn">
          Start Your Project →
        </a>

      </section>



      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="footer">

        <div>

          <a href="#home" className="logo footer-logo">

            <span className="logo-icon">N</span>

            <span>NovaTech Solutions</span>

          </a>


          <p>
            Innovating today. Transforming tomorrow.
          </p>

        </div>



        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#contact">Contact</a>

        </div>



        <p className="copyright">

          © {new Date().getFullYear()} NovaTech Solutions.
          Demo portfolio project.

        </p>

      </footer>



      {/* =====================================
          FLOATING WHATSAPP
      ===================================== */}

      <button
        className="floating-whatsapp"
        onClick={openWhatsApp}
        aria-label="Contact us on WhatsApp"
      >
        ☎
      </button>


    </div>

  );

}



/* =========================================
   MAIN APP ROUTER
========================================= */

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* HOMEPAGE */}

        <Route
          path="/"
          element={<HomePage />}
        />


        {/* INDIVIDUAL SERVICE PAGES */}

        <Route
          path="/services/:serviceId"
          element={<ServiceDetails />}
        />

      </Routes>

    </BrowserRouter>

  );

}


export default App;
