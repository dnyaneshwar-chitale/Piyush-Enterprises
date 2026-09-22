import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={close}>
          <img className="brand-logo" src="/images/piyush-logo.png" alt="Piyush Enterprises logo" />
          <span className="logo-text"><strong>PIYUSH</strong><small>ENTERPRISES</small></span>
        </Link>
        <nav className={`nav-links ${open ? "active" : ""}`}>
          {[
            ["/", "Home"], ["/about", "About"], ["/products", "Products"],
            ["/manufacturing", "Manufacturing"], ["/customers", "Customers"], ["/contact", "Contact"]
          ].map(([path, label]) => <NavLink key={path} to={path} onClick={close}>{label}</NavLink>)}
          <a href="tel:+918237011691" className="nav-phone" onClick={close}><Phone size={16}/>Call Us</a>
        </nav>
        <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
    </header>
  );
}
