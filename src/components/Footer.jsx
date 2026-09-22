import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <Link to="/" className="logo">
          <img className="brand-logo footer-logo" src="/images/piyush-logo.png" alt="Piyush Enterprises logo" />
          <span className="logo-text"><strong>PIYUSH</strong><small>ENTERPRISES</small></span>
        </Link>
        <p>Manufacturer of forging, machining and assembly components for two and three wheeler industries.</p>
        <div className="iso-badge">ISO 9001:2015</div>
      </div>
      <div><h4>Quick Links</h4><div className="footer-links">
        <Link to="/">Home</Link><Link to="/about">About Us</Link><Link to="/products">Products</Link>
        <Link to="/manufacturing">Manufacturing</Link><Link to="/customers">Customers</Link><Link to="/contact">Contact</Link>
      </div></div>
      <div><h4>Contact</h4><div className="footer-contact">
        <p><MapPin size={18}/>Gut No. 53, Plot No. 30P, Sajapur, Waluj MIDC, Aurangabad</p>
        <a href="tel:+918237011691"><Phone size={18}/>+91 8237011691</a>
        <a href="mailto:chitalepiyushent@gmail.com"><Mail size={18}/>chitalepiyushent@gmail.com</a>
      </div></div>
      <div><h4>Get In Touch</h4><p className="footer-small">Looking for reliable automotive component manufacturing?</p>
        <Link to="/contact" className="footer-cta">Contact Us <ArrowUpRight size={17}/></Link>
      </div>
    </div>
    <div className="footer-bottom"><div className="container footer-bottom-inner">
      <p>© {new Date().getFullYear()} Piyush Enterprises. All Rights Reserved.</p>
      <p>Sajapur • Waluj MIDC • Aurangabad</p>
    </div></div>
  </footer>;
}
