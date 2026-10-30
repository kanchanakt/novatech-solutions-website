
import { Link, useParams } from "react-router-dom";
import "./ServiceDetails.css";

const serviceData = {
  "web-development": {
    icon: "💻",
    title: "Web Development",
    subtitle: "Build Your Digital Presence.",
    description:
      "We create modern, responsive and professional websites that help businesses attract customers, showcase their services and grow online.",
    features: [
      ["Business Websites", "Professional websites for companies and startups."],
      ["E-commerce Websites", "Online stores with product listings and shopping experiences."],
      ["Landing Pages", "High-converting pages for products and campaigns."],
      ["Portfolio Websites", "Showcase your work, skills and achievements."],
      ["Responsive Design", "Websites that work on mobile, tablet and desktop."],
      ["SEO-Friendly Structure", "Build a website with search-engine-friendly foundations."]
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js"],
    process: [
      "Understand your business requirements",
      "Create the website design",
      "Develop the responsive website",
      "Test and publish the website"
    ]
  },

  "mobile-solutions": {
    icon: "📱",
    title: "Mobile Solutions",
    subtitle: "Connect With Customers Everywhere.",
    description:
      "Create convenient digital experiences that allow your customers to interact with your business through mobile-friendly applications and interfaces.",
    features: [
      ["Mobile-Friendly Websites", "Seamless experiences on smartphones."],
      ["Application Interfaces", "Modern and intuitive mobile app designs."],
      ["Customer Portals", "Convenient customer access and interactions."],
      ["Responsive Experiences", "Layouts that adapt to different screens."],
      ["User-Friendly Navigation", "Simple and intuitive user journeys."],
      ["Cross-Device Testing", "Consistent experiences across devices."]
    ],
    technologies: ["React.js", "JavaScript", "CSS3", "REST APIs"],
    process: [
      "Understand customer requirements",
      "Plan the mobile experience",
      "Develop the interface",
      "Test across different devices"
    ]
  },

  "business-software": {
    icon: "⚙️",
    title: "Business Software",
    subtitle: "Simplify Your Business Operations.",
    description:
      "We develop customized business applications that help companies manage their daily operations, employees, customers and important records.",
    features: [
      ["Employee Management", "Manage employee details and records."],
      ["Billing Applications", "Create invoices and manage payments."],
      ["Inventory Management", "Track products and stock information."],
      ["Admin Dashboards", "Monitor business activity and performance."],
      ["Database Integration", "Store and manage business information."],
      ["Reports and Analytics", "Understand business performance through reports."]
    ],
    technologies: ["Java", "Spring Boot", "React.js", "MySQL"],
    process: [
      "Analyze business requirements",
      "Plan the application architecture",
      "Develop and integrate the application",
      "Test and deploy the application"
    ]
  },

  "digital-consulting": {
    icon: "📊",
    title: "Digital Consulting",
    subtitle: "Make Smarter Technology Decisions.",
    description:
      "We help businesses understand their technology requirements and identify opportunities to improve their digital presence and business processes.",
    features: [
      ["Technology Planning", "Identify suitable technologies for your business."],
      ["Website Audits", "Review website usability and performance."],
      ["Digital Strategy", "Plan your online business presence."],
      ["Process Improvement", "Identify opportunities to simplify workflows."],
      ["Software Recommendations", "Choose suitable software solutions."],
      ["Growth Planning", "Plan improvements to your digital operations."]
    ],
    technologies: ["Digital Strategy", "Web Technologies", "Analytics", "Automation"],
    process: [
      "Understand your current business setup",
      "Identify challenges and opportunities",
      "Recommend suitable solutions",
      "Prepare an improvement roadmap"
    ]
  }
};

function ServiceDetails() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="service-not-found">
        <h1>Service Not Found</h1>
        <Link to="/#services">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="service-detail-page">

      {/* HEADER */}
      <header className="detail-header">
        <Link to="/" className="detail-logo">
          <span className="detail-logo-icon">N</span>
          NovaTech Solutions
        </Link>

        <Link to="/#services" className="back-link">
          ← All Services
        </Link>
      </header>

      {/* HERO */}
      <section className="detail-hero">
        <div className="detail-hero-content">
          <span className="detail-eyebrow">
            NOVATECH SOLUTIONS / OUR SERVICES
          </span>

          <h1>{service.title}</h1>

          <h2>{service.subtitle}</h2>

          <p>{service.description}</p>

          <div className="detail-buttons">
            <a href="#service-features" className="detail-primary">
              Explore Features ↓
            </a>

            <Link to="/#contact" className="detail-secondary">
              Request a Project
            </Link>
          </div>
        </div>

        <div className="detail-hero-visual">
          <div className="detail-icon-circle">
            {service.icon}
          </div>
          <h3>{service.title}</h3>
          <p>Technology designed around your business.</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="detail-section" id="service-features">
        <div className="detail-section-heading">
          <span>WHAT WE OFFER</span>
          <h2>Explore Our Capabilities</h2>
          <p>
            Practical solutions designed to meet your business needs.
          </p>
        </div>

        <div className="detail-feature-grid">
          {service.features.map((feature, index) => (
            <div className="detail-feature-card" key={feature[0]}>
              <div className="detail-feature-number">
                0{index + 1}
              </div>

              <h3>{feature[0]}</h3>
              <p>{feature[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="detail-tech-section">
        <div className="detail-section-heading">
          <span>OUR TECHNOLOGY</span>
          <h2>Technologies We Work With</h2>
          <p>Tools and technologies used to create digital solutions.</p>
        </div>

        <div className="detail-tech-list">
          {service.technologies.map((tech) => (
            <div className="detail-tech-item" key={tech}>
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="detail-section">
        <div className="detail-section-heading">
          <span>OUR APPROACH</span>
          <h2>How We Work</h2>
          <p>A clear process from understanding your needs to delivery.</p>
        </div>

        <div className="detail-process-grid">
          {service.process.map((step, index) => (
            <div className="detail-process-card" key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="detail-cta">
        <h2>Have a Project in Mind?</h2>
        <p>
          Let's discuss your requirements and explore the right solution.
        </p>

        <Link to="/#contact" className="detail-primary">
          Contact Our Team →
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="detail-footer">
        <Link to="/" className="detail-logo">
          <span className="detail-logo-icon">N</span>
          NovaTech Solutions
        </Link>

        <p>© {new Date().getFullYear()} NovaTech Solutions. Demo project.</p>
      </footer>

    </div>
  );
}

export default ServiceDetails;
